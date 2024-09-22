import { Button } from "@/components/ui/button";
import { ProblemStatus as ProblemStatus, useApp, useTasks, type aProblem as aProblem } from "@/lib/hooks/use-tasks";
import React, { useEffect, useState } from 'react';
import { question_bank } from "./resources/problems";
import { CopilotTask, useCopilotContext, useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
import { CopilotTextarea } from "@copilotkit/react-textarea";
import {
    Container,
    Typography,
    TextField,
    Paper,
} from '@mui/material';
import Explanation from "./Explanation";
import { useCopilotChat } from "@copilotkit/react-core";
import { Role, TextMessage } from "@copilotkit/runtime-client-gql";
import { Input } from "./ui/input";

// export function Problem({problemStatus, setProblemStatus }) {
//     const { problem, setProblem } = useTasks();
//     const { currProblem, setCurrProblem }
//     const [ userAnswer, setUserAnswer ] = React.useState<string>('');
//     const problems: ProblemType[] = Object.entries(question_bank).flatMap(([topic, problems]) =>
//         problems.map(problem => ({
//             ...problem,
//             topic,
//             userAnswer: '',
//             status: ProblemStatus.inProgress
//         }))
//     );
//     console.log(problems[0]);

//     React.useEffect(
//         () => setProblem(problems[0]), []
//     );

//     const context = useCopilotContext();
//     const evaluateAnswerTask = new CopilotTask({
//         instructions: "Evaluate whether the user's answer to the problem, stored in userAnswer, is correct. Set the value of problemStatus to ProblemStatus.correct using setProblemStatus(ProblemStatus.correct) if the answer is correct, and ProblemStatus.incorrect using setProblemStatus(ProblemStatus.incorrect) if it is incorrect.",
//         actions: [
//             {
//                 name: "updateProblemStatus",
//                 description: "set the problem status based on whether the answer is correct or incorrect",
//                 argumentAnnotations: [
//                     {
//                         name: "isCorrect",
//                         description: "true if the answer to the problem is correct, and false otherwise",
//                         type: "boolean",
//                         required: true
//                     }],
//                 implementation: async (isCorrect: boolean) => {
//                     isCorrect ? setProblemStatus(ProblemStatus.correct) : setProblemStatus(ProblemStatus.incorrect);
//                 }
//             }
//         ]
//     });

//     const generateProblemTask = new CopilotTask({
//         instructions: "Generate a follow-up problem",
//         actions: [
//             {
//                 name: "generateProblem",
//                 description: "generate a follow-up problem",
//                 argumentAnnotations: [
//                     {
//                         name: "generatedProblem",
//                         type: "Problem",
//                         description: "The follow-up problem that will be asked next.",
//                         required: true,
//                     },
//                 ],
//                 implementation: async (generatedProblem: ProblemType) => {
//                     setProblem(generatedProblem)
//                 },
//             }
//         ]
//     });

//     const handleSubmit = async () => {
//        //alert(`userAnswer was passed in as: ${userAnswer}`);
//     //    await evaluateAnswerTask.run(context, "updateProblemStatus");
//        if (userAnswer === problem.answer) {
//            setProblemStatus(ProblemStatus.correct)
//        } else {
//            setProblemStatus(ProblemStatus.incorrect)
//        }
//        alert(problem.answer);
//     };

//     const handleNext = async (wasCorrect: boolean) => {
//         if (wasCorrect) {
//             const newTopic = switchTopics();
//             const newProblem: ProblemType = getProblemFromQuestionBank(newTopic);
//             setProblem(newProblem);
//             setProblemStatus(ProblemStatus.inProgress);
//         } else {
//             // TODO generate problem task run, choose next problem
//             await generateProblemTask.run(context, "generateProblem")
//         }
//     }

//     const switchTopics = () => {
//         const curTopic = problem.topic;
//         for (let topic in Object.keys(question_bank)) {
//             if (topic !== curTopic) {
//                 return topic;
//             }
//         }
//     }

//     type Topic = 'addition' | 'subtraction' | 'multiplication' | 'division' | string | undefined;
//     const getProblemFromQuestionBank = (topic: Topic) => {
//         const questions = question_bank[topic];
//         for (let i = 0; i < questions.length; i++) {
//             if (questions[i]["question"] !== problem.question) {
//                 return {...questions[i], topic: topic, userAnswer: ''};
//             }
//         }
//     }

//     return (
//         <>
//             <Container maxWidth="sm">
//             <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
//                 <Typography variant="h5" component="h2" gutterBottom>
//                 Problem Statement
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                 {problem.question}
//                 </Typography>

//                 <TextField
//                 variant="outlined"
//                 multiline
//                 rows={4}
//                 placeholder="Write your answer here..."
//                 fullWidth
//                 value={userAnswer}
//                 onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setUserAnswer(e.target.value)} // Explicit typing for e
//                 style={{ marginBottom: '20px' }}
//                 />

//                 <Button
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 style={{ padding: '10px' }}
//                 onClick={() => handleSubmit()}
//                 >
//                 Submit
//                 </Button>
//             </Paper>
//             </Container>

//             {
//                 problemStatus === ProblemStatus.correct ? 
//                 <Container maxWidth="sm" style={{ display: 'flex', alignItems: 'flex-start' }}>
//                     <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px', flex: 1 }}>
//                         <Typography variant="h5" component="h2" gutterBottom>
//                             You got it right!
//                         </Typography>
//                         <Typography variant="body1" gutterBottom>
//                             {problem.explanation}
//                         </Typography>
//                     </Paper>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         style={{ marginLeft: '16px', padding: '10px', backgroundColor: 'blue', color: 'white' }}
//                         onClick={() => handleNext()} // Handle next button click
//                     >
//                         Next
//                     </Button>
//                 </Container>
//                 :
//                 problemStatus === ProblemStatus.incorrect ?
//                 <Container maxWidth="sm" style={{ display: 'flex', alignItems: 'flex-start' }}>
//                     <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px', flex: 1 }}>
//                         <Typography variant="h5" component="h2" gutterBottom>
//                             Incorrect
//                         </Typography>
//                         <Typography variant="h5" component="h2" gutterBottom>
//                             The answer was: {problem.answer}
//                         </Typography>
//                         <Typography variant="body1" gutterBottom>
//                             {problem.explanation}
//                         </Typography>
//                     </Paper>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         style={{ marginLeft: '16px', padding: '10px', backgroundColor: 'blue', color: 'white' }}
//                         onClick={() => handleNext()} // Handle next button click
//                     >
//                         Next
//                     </Button>
//                 </Container>
//                 :
//                 <></>
//             }
//         </>

//     );
// };

export function Problem() {
    const { currProblem, setCurrProblem } = useApp();
    const { aproblemSet, setAproblemSet } = useApp();
    const [currAnswer, setCurrAnswer] = useState<string>("")
    const [ correctness, setCorrectness ] = useState<boolean>(false)
    const [currExplanation, setCurrExplanation] = useState<string>("")
    const listQuestions = aproblemSet.map(problem => problem.question)

    const [inProgress, setInProgress] = useState<boolean>(true);

    const { appendMessage } = useCopilotChat();

    useEffect(() => {
        if (aproblemSet && aproblemSet.length > 0) {
            setCurrProblem(aproblemSet[0])
        }
    }, [aproblemSet])

    const buttonClick = () => {
        setCorrectness(false)
        setInProgress(true);
        if (aproblemSet && aproblemSet.length > 0) {
            aproblemSet.shift()
            setCurrProblem(aproblemSet[0])
        }
        setAproblemSet(aproblemSet)
    }

    useCopilotReadable({
        description: "The user's current answer to the current problem",
        value: currAnswer
    });

    useCopilotAction({
        name: "evaluateAnswer",
        description: "Evaluates whether the user's current answer to the current problem is correct. Return true if it is correct, and false otherwise. If the user was wrong, include the correctness, problem topic name, and a hint on how to solve the problem in a short description (less than 100 words). ABSOLUTELY DO NOT answer the question.",
        parameters: [
            {
                name: "correctness",
                type: "boolean",
                description: "This is true if the user's current answer to the problem is correct",
                required: true
            },
            {
                name: "description",
                type: "string",
                description: "The problem topic name and a hint on how to solve the problem. Do not provide the final answer, only hint to help the student solve the problem on their own. Keep your answers concise and under 200 words.",
                required: true
            }
        ],
        handler: ({ correctness, description }) => {
            evaluateAnswer(correctness, description);
        }
    })

    useCopilotAction({
        name: "generateProblem",
        description: 'Generates a new problem to replace current problem',
        parameters: [ 
            { name: "topic", type: "string", description: "The topic or subject area of the problem", required: true }, 
            { name: "question", type: "string", description: "The actual problem or question to be solved", required: true }, 
            { name: "answer", type: "string", description: "The correct answer to the problem", required: true }, 
        ],
        handler: ({ topic, question, answer}) => {
            setCorrectness(false)
            setInProgress(true)
            currProblem.answer = answer
            currProblem.question = question
            currProblem.topic = topic
        }
    })

    // const buttonClick = () => {
    //     setCorrectness(false)
    //     setInProgress(true);
    //     if (aproblemSet && aproblemSet.length > 0) {
    //         aproblemSet.shift()
    //         setCurrProblem(aproblemSet[0])
    //     }
    //     setAproblemSet(aproblemSet)
    // }

    const evaluateAnswer = (correctness: boolean, description: string) => {
        var updatedStatus: ProblemStatus = ProblemStatus.inProgress;
        if (!correctness) {
            setCurrExplanation(description)
            updatedStatus = ProblemStatus.incorrect;
        } else {
            setCorrectness(true)
            updatedStatus = ProblemStatus.correct;
        }

        // update current problem with the updated status
        const updatedProblem: aProblem = {
            question: currProblem.question,
            topic: currProblem.topic,
            answer: currProblem.answer,
            status: updatedStatus
        }
        alert(updatedStatus);
        setCurrProblem(updatedProblem)
    }

    const handleSubmit = () => {
        appendMessage(
            new TextMessage({
              content: `I think the answer to the problem is ${currAnswer}. This is my final answer`,
              role: Role.User,
            }),
          );
        setInProgress(false);
    }

    const handleNext= () => {
        // remove problem from quetion bank
        setAproblemSet(aproblemSet.filter((problem) => problem.question !== currProblem.question));
        
        // choose next problem
        const moreProblems = aproblemSet.length > 0;
        if (moreProblems) {
            const newProblem = aproblemSet[0];
            setCorrectness(false)
            setInProgress(true)
            currProblem.answer = newProblem.answer;
            currProblem.question = newProblem.question;
            currProblem.topic = newProblem.topic;
            return;
        }
        appendMessage(
            new TextMessage({
              content: `I would like a new problem in ${currProblem.topic} generated in the format: {"topic": string, "question": string, "answer": string}`,
              role: Role.User,
            }),
          );
        setInProgress(true);
    }

    return (
        <div className="mt-4 pt-4 space-y-2 bg-background p-4 rounded-md border">
            <h1 className="text-2xl font-bold">Problem</h1>
            <CopilotTextarea className="border h-40 p-2 overflow-hidden" value={currProblem.question} placeholder="question will appear here..." autosuggestionsConfig={{
                textareaPurpose: "text that displays the current question", chatApiConfigs: {}
            }} readOnly></CopilotTextarea>
            {/* <CopilotTextarea className="border h-40 p-2 overflow-hidden" value={currAnswer} placeholder="answer will appear here..." autosuggestionsConfig={{
                textareaPurpose: "text that displays the user's current answer", chatApiConfigs: {}
            }}></CopilotTextarea> */}
            {/* <Button onClick={}>Submit</Button> */}
            <h1 className="text-2xl font-bold">Answer</h1>
            <Input
                value={currAnswer}
                onChange={(e) => setCurrAnswer(e.target.value)}
                type="text"
                placeholder="Enter your answer..."
                className="flex-1 mr-2 bg-muted text-muted-foreground rounded-md px-4 py-2"
            />
            {
                inProgress ?
                <Button type="button" onClick={handleSubmit}>
                    Submit
                </Button>
            :
                <Button type="button" onClick={handleNext}>
                    Next
                </Button>
            }
            <h1 className="text-2xl font-bold">Explanation</h1>
            <Explanation explanation={currExplanation}></Explanation>
        </div>
    );
}

export default Problem;
