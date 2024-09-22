import { aProblem, ProblemStatus } from "./hooks/use-tasks";

export const defaultProblems: aProblem[] = [
    {
        question: "The Industrial Revolution marked a transition from what economy?",
        topic: "American history",
        answer: "agricultural",
        status: ProblemStatus.inProgress
      },
]