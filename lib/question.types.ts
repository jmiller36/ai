export type Question = {
  id: number;
  topic: string;
  title: string;
  status: TaskStatus;
};

export enum TaskStatus {
  todo = "todo",
  done = "done",
}
