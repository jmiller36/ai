export type Problem = {
    problemText: string,
    explanation: string,
    answer: string,
    status: ProblemStatus
  };
  
  export enum ProblemStatus {
    todo = "todo",
    correct = "correct",
    incorrect = "incorrect"
  }
  