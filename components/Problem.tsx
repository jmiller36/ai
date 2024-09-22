import { Button } from "@/components/ui/button";
import { useTasks } from "@/lib/hooks/use-tasks";
import React from 'react';
import { question_bank } from "./resources/problems";
import { ProblemStatus, type Problem as ProblemType } from "@/lib/problems.types";
import { CopilotTask, useCopilotContext } from "@copilotkit/react-core";
import {
  Container,
  Typography,
  TextField,
  Paper,
} from '@mui/material';

export function Problem({problemStatus, setProblemStatus }) {
    const { problem, setProblem } = useTasks();
    const [ userAnswer, setUserAnswer ] = React.useState<string>('');
    const problems: ProblemType[] = [

    ]
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
                        name: "nextProblem",
                        type: "Problem",
                        description: "The follow-up problem that will be asked next.",
                        required: true,
                    },
                ],
                implementation: async (nextProblem: ProblemType) => {
                    setProblem(nextProblem)
                },
            }
        ]
    });

    const handleSubmit = async () => {
        alert(`userAnswer was passed in as: ${userAnswer}`);
        await evaluateAnswerTask.run(context, "updateProblemStatus");
    };

    const handleNext = async () => {
        // TODO generate problem task run, choose next problem
        await generateProblemTask.run(context, "generateProblem")
    }

    return (
        <>
            <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
                <Typography variant="h5" component="h2" gutterBottom>
                Problem Statement
                </Typography>
                <Typography variant="body1" gutterBottom>
                {problem.text}
                </Typography>

                <TextField
                variant="outlined"
                multiline
                rows={4}
                placeholder="Write your answer here..."
                fullWidth
                value={userAnswer}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setUserAnswer(e.target.value)} // Explicit typing for e
                style={{ marginBottom: '20px' }}
                />

                <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ padding: '10px' }}
                onClick={() => handleSubmit()}
                >
                Submit
                </Button>
            </Paper>
            </Container>
            {
                problemStatus === ProblemStatus.correct ? 
                <Container maxWidth="sm">
                    <Typography variant="h5" component="h2" gutterBottom>
                    You got it right!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    {problem.explanation}
                    </Typography>
                </Container>
                :
                problemStatus === ProblemStatus.incorrect ?
                <Container maxWidth="sm">
                    <Typography variant="h5" component="h2" gutterBottom>
                    Incorrect
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                    The answer was: {problem.answer}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    {problem.explanation}
                    </Typography>
                </Container>
                :
                <></>
            }
        </>
        
    );
};

export default Problem;
