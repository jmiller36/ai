import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTasks } from "@/lib/hooks/use-tasks";
import { motion } from "framer-motion";
import { TaskStatus, type Task } from "@/lib/tasks.types";
import React from 'react';
import { question_bank } from "./resources/problems";
import { ProblemStatus, type Problem } from "@/lib/problems.types";
import {
  Container,
  Typography,
  TextField,
  Paper,
} from '@mui/material';

export function Problem({ problem: {problemText, explanation, answer, userAnswer, status}} : {problem: Problem}) {
    const { problem } = useTasks();
    // const [ userAnswer, setUserAnswer ] = React.useState<string>('')
    const problems: Problem[] = [
    
    ]

    const handleSubmit = () => {
        alert(`userAnswer was passed in as: ${userAnswer}`);
        setUserAnswer(userAnswer)
    };

    return (
        <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h5" component="h2" gutterBottom>
            Problem Statement
            </Typography>
            <Typography variant="body1" gutterBottom>
            {problem.problemText}
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
    );
    };

    export default Problem;
