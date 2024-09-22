export type Problem = {
  topic: string,
  question: string,
  explanation: string,
  answer: string,
  userAnswer: string
};
  
export enum ProblemStatus {
  inProgress = "inProgress",
  correct = "correct",
  incorrect = "incorrect"
}
  