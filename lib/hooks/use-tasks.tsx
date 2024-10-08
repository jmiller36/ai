import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { createContext, useContext, useState, ReactNode } from "react";
import { defaultTasks } from "../default-tasks";
import { Task, TaskStatus } from "../tasks.types";
import { Problem, ProblemStatus } from "../problems.types";

let nextId = defaultTasks.length + 1;

type TasksContextType = {
  problem: Problem;
  tasks: Task[];
  addProblem: (problemText: string, explanation: string, answer: string, status: ProblemStatus) => void;
  addTask: (title: string) => void;
  setProblem: (problem: Problem) => void;
  setTaskStatus: (id: number, status: TaskStatus) => void;
  deleteTask: (id: number) => void;
};

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [problem, setProblem] = useState<Problem>({text: "", explanation: "", answer: "", status: ProblemStatus.inProgress} as Problem);

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
      addProblem(problemText, explanation, answer, ProblemStatus.todo);
    }
  });

  useCopilotAction({
    name: "evaluateAnswer",
    description: "Evaluates whether the user's answer to the problem is correct, and returns true if it is correct, and false otherwise",
    parameters: [
      {
        name: "problem",
        type: "object",
        description: "The problem that the user submitted an answer to. It is an object of type Problem, which has a problemText, explanation, and answer",
        required: true
      },
      {
        name: "userAnswer",
        type: "string",
        description: "The user's answer to the problem.",
        required: true
      }
    ],
    handler: ({ problem, userAnswer }) => {
      evaluateAnswer(problem, userAnswer);
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
  //   name: "evaluateAnswer",
  //   description: "Evaluate the answer to the current problem",
  //   parameters: [
  //     {
  //       name: "answer",
  //       type: "string",
  //       description: "The answer to the problem",
  //       required: true,
  //     },
  //   ],
  //   handler: ({ problemText, answer }) => {
  //     evaluate(problemText, answer);
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

  const addProblem = (problemText: string, explanation: string, answer: string, status: ProblemStatus) => {
    //setProblem({problemText: problemText, explanation: explanation, answer: answer, status: status} as Problem);
    alert(`addProblem called with problem ${problemText}`);
  }

  const evaluateAnswer = (problem: Problem, userAnswer: string) => {
    return true;
  }

  // const evaluate = (problem: string, answer: string) => {
  //   setAnswer()
  // const evaluate = (answer: string) => {
  //   setProblem({explanation: explanation, answer: answer, status: status});
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

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

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const setUserAnswer = () => { // TO-DO
    
  };
  
  return (
    <TasksContext.Provider value={{ problem, tasks, setProblem, addProblem, addTask, setTaskStatus, deleteTask }}>
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
