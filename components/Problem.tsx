import { Button } from "@/components/ui/button";
import { useTasks } from "@/lib/hooks/use-tasks";
import React from 'react';
//import { question_bank } from "./resources/problems";
import { geography_question_bank } from "./resources/geography_questions";
import { ProblemStatus, type Problem as ProblemType } from "@/lib/problems.types";
import { CopilotTask, useCopilotContext } from "@copilotkit/react-core";
import { useCopilotChat } from "@copilotkit/react-core";
import { Role, TextMessage } from "@copilotkit/runtime-client-gql";
import {
  Container,
  Typography,
  TextField,
  Paper,
} from '@mui/material';

export function Problem({problemStatus, setProblemStatus }) {
    const { appendMessage } = useCopilotChat();
    const question_bank = geography_question_bank;

    const { problem, setProblem } = useTasks();
    const [ userAnswer, setUserAnswer ] = React.useState<string>('');
    const problems: ProblemType[] = Object.entries(question_bank).flatMap(([topic, problems]) =>
        problems.map(problem => ({
            ...problem,
            topic,
            userAnswer: '',
            status: ProblemStatus.inProgress
        }))
    );
    console.log(problems[0]);

    React.useEffect(
        () => setProblem(problems[0]), []
    );
    
    const context = useCopilotContext();
    const evaluateAnswerTask = new CopilotTask({
        instructions: "Evaluate whether the user's answer to the problem, stored in userAnswer, is correct. Set the value of problemStatus to ProblemStatus.correct using setProblemStatus(ProblemStatus.correct) if the answer is correct, and ProblemStatus.incorrect using setProblemStatus(ProblemStatus.incorrect) if it is incorrect.",
        actions: [
            {
                name: "updateProblemStatus",
                description: "set the problem status based on whether the answer is correct or incorrect",
                argumentAnnotations: [
                    {
                        name: "isCorrect",
                        description: "true if the answer to the problem is correct, and false otherwise",
                        type: "boolean",
                        required: true
                    }],
                implementation: async (isCorrect: boolean) => {
                    isCorrect ? setProblemStatus(ProblemStatus.correct) : setProblemStatus(ProblemStatus.incorrect);
                }
            }
        ]
    });

    const generateProblemTask = new CopilotTask({
        instructions: "Generate a follow-up problem",
        actions: [
            {
                name: "generateProblem",
                description: "generate a follow-up problem",
                argumentAnnotations: [
                    {
                        name: "generatedProblem",
                        type: "Problem",
                        description: "The follow-up problem that will be asked next.",
                        required: true,
                    },
                ],
                implementation: async (generatedProblem: ProblemType) => {
                    setProblem(generatedProblem)
                },
            }
        ]
    });

    const handleSubmit = async () => {
        //alert(`userAnswer was passed in as: ${userAnswer}`);
        //await evaluateAnswerTask.run(context, "updateProblemStatus");
        const isCorrect = problem.answer === userAnswer;
        isCorrect ? setProblemStatus(ProblemStatus.correct) : setProblemStatus(ProblemStatus.incorrect);
        appendMessage(
            new TextMessage({
              content: `I think the answer to the problem is ${userAnswer}`,
              role: Role.User,
            }),
          );
        setUserAnswer('');
    };

    const handleNext = async (wasCorrect: boolean) => {
        if (wasCorrect) {
            const newTopic = switchTopics();
            const newProblem: ProblemType = getProblemFromQuestionBank(newTopic);
            setProblem(newProblem);
            setProblemStatus(ProblemStatus.inProgress);
        } else {
            // TODO generate problem task run, choose next problem
            //await generateProblemTask.run(context, "generateProblem")
            const newProblem: ProblemType = getProblemFromQuestionBank(problem.topic);
            setProblem(newProblem);
            setProblemStatus(ProblemStatus.inProgress);
        }
    }

    const switchTopics = () => {
        const curTopic = problem.topic;
        
        // Filter out the current topic from the topics
        const availableTopics = Object.keys(question_bank).filter(topic => topic !== curTopic);
      
        // Randomly select a new topic from the available options
        const randomIndex = Math.floor(Math.random() * availableTopics.length);
        return availableTopics[randomIndex];
      };

    type Topic = 'countries' | 'capitals' | 'landmarks' | 'rivers' | string | undefined;
    const getProblemFromQuestionBank = (topic: Topic) => {
        const questions = question_bank[topic];
        
        // Filter out the current problem from the questions
        const filteredQuestions = questions.filter(question => question.question !== problem.question);

        // Randomly select a question from the filtered questions
        const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
        const selectedQuestion = filteredQuestions[randomIndex];

        // Return the selected question with the topic and userAnswer properties
        return { ...selectedQuestion, topic, userAnswer: '' };
    };

    return (
        <>
            <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
                <Typography variant="h5" component="h2" gutterBottom>
                Problem Statement
                </Typography>
                <Typography variant="body1" gutterBottom>
                {problem.question}
                </Typography>

                <TextField
                variant="outlined"
                multiline
                rows={4}
                placeholder="Write your answer here..."
                fullWidth
                style={{ padding: '10px', width: '100%' }}
                value={userAnswer}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setUserAnswer(e.target.value)} // Explicit typing for e
                style={{ marginBottom: '20px' }}
                />

                <Button
                variant="contained"
                color="primary"
                style={{ padding: '10px', width: '100%' }}
                onClick={() => handleSubmit()}
                >
                Submit
                </Button>
            </Paper>
            </Container>

            {
                problemStatus === ProblemStatus.correct ? 
                <Container maxWidth="sm" style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px', flex: 1 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            You got it right!
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {problem.explanation}
                        </Typography>
                    </Paper>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginLeft: '16px', padding: '10px', backgroundColor: 'blue', color: 'white' }}
                        onClick={() => handleNext()} // Handle next button click
                    >
                        Next
                    </Button>
                </Container>
                :
                problemStatus === ProblemStatus.incorrect ?
                <Container maxWidth="sm" style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px', flex: 1 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Incorrect
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>
                            The answer was: {problem.answer}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {problem.explanation}
                        </Typography>
                    </Paper>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginLeft: '16px', padding: '10px', backgroundColor: 'blue', color: 'white' }}
                        onClick={() => handleNext()} // Handle next button click
                    >
                        Next
                    </Button>
                </Container>
                :
                <></>
            }
        </>
        
    );
};

export default Problem;
