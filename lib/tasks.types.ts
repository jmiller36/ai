export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
};

export enum TaskStatus {
  todo = "todo",
  done = "done",
}

export interface TopicQuestions {
  [topic: string]: string[];
}