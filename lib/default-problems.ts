import { aProblem } from "./hooks/use-tasks";
import { ProblemStatus } from "./problems.types";

export const defaultProblems: aProblem[] = [
    {
        question: "The Industrial Revolution marked a transition from what economy?",
        topic: "American history",
        answer: "agricultural",
        status: ProblemStatus.inProgress
      },
]