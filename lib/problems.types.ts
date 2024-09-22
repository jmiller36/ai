export type Problem = {
    problemText: string,
    explanation: string,
    answer: string,
    userAnswer: string,
    status: ProblemStatus
  };
  
  export enum ProblemStatus {
    todo = "todo",
    correct = "correct",
    incorrect = "incorrect"
  }
  