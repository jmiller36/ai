import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { createContext, useContext, useState, ReactNode } from "react";
import { defaultTasks } from "../default-tasks";
import { Task, TaskStatus } from "../tasks.types";
import { Problem, ProblemStatus } from "../problems.types";

let nextId = defaultTasks.length + 1;

type TasksContextType = {
  tasks: Task[];
  addTask: (title: string) => void;
  setTaskStatus: (id: number, status: TaskStatus) => void;
  deleteTask: (id: number) => void;
  addProblem: (problemText: string, explanation: string, answer: string) => void;
};

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [problems, setProblems] = useState<Problem[]>([]);

  useCopilotAction({
    name: "addProblem",
    description: "Generates a question and answer",
    parameters: [
      {
        name: "problemText",
        type: "string",
        description: "The problem statement",
        required: true
      },
      {
        name: "explanation",
        type: "string",
        description: "An explanation of the solution to the problem described in problemText",
        required: true
      },
      {
        name: "answer",
        type: "string",
        description: "the correct answer to the problem in problemText",
        required: true
      }
    ],
    handler: ({ problemText, explanation, answer}) => {
      addProblem(problemText, explanation, answer);
    }
  })

  useCopilotReadable({
    description: "The state of the todo list",
    value: JSON.stringify(tasks),
  });

  useCopilotAction({
    name: "addTask",
    description: "Adds a task to the todo list",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "The title of the task",
        required: true,
      },
    ],
    handler: ({ title }) => {
      addTask(title);
    }
  });

  useCopilotAction({
    name: "deleteTask",
    description: "Deletes a task from the todo list",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the task",
        required: true,
      },
    ],
    handler: ({ id }) => {
      deleteTask(id);
    }
  });

  // useCopilotAction({
  //   name: "setProblemStatus",
  //   description: "Sets the status of a problem",
  //   parameters: [
  //     {
  //       name: "id",
  //       type: "number",
  //       description: "The id of the problem",
  //       required: true,
  //     },
  //     {
  //       name: "status",
  //       type: "string",
  //       description: "The status of the problem",
  //       enum: Object.values(ProblemStatus),
  //       required: true,
  //     },
  //   ],
  //   handler: ({ id, status }) => {
  //     setProblemStatus(id, status);
  //   }
  // });

  useCopilotAction({
    name: "setTaskStatus",
    description: "Sets the status of a task",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the task",
        required: true,
      },
      {
        name: "status",
        type: "string",
        description: "The status of the task",
        enum: Object.values(TaskStatus),
        required: true,
      },
    ],
    handler: ({ id, status }) => {
      setTaskStatus(id, status);
    }
  });

  const addProblem = (problemText: string, explanation: string, answer: string) => {
    setProblems([...problems, {problemText: problemText, explanation: explanation, answer: answer}]);
    alert(`addProblem called with problem ${problemText}`);
  }

  const addTask = (title: string) => {
    setTasks([...tasks, { id: nextId++, title, status: TaskStatus.todo }]);
  };

  const setTaskStatus = (id: number, status: TaskStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  // const setProblemStatus = (id: number, status: ProblemStatus) => {
  //   setProblems(
  //     problems.map((problem) =>
  //       problem.id === id ? { ...problem, status } : problem
  //     )
  //   );
  // };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  
  return (
    <TasksContext.Provider value={{ tasks, addTask, setTaskStatus, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};
