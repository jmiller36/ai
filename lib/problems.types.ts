export type Problem = {
    problemText: string,
    explanation: string,
    answer: string
  };
  
  export enum ProblemStatus {
    todo = "todo",
    correct = "correct",
    incorrect = "incorrect"
  }
  