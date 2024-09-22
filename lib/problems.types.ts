export type Problem = {
  topic: string,
  text: string,
  explanation: string,
  answer: string,
  userAnswer: string,
  status: ProblemStatus
};
  
export enum ProblemStatus {
  inProgress = "inProgress",
  correct = "correct",
  incorrect = "incorrect"
}
  