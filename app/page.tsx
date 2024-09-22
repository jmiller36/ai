"use client";

import { TasksList } from "@/components/TasksList";
import { AppProvider, TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import { Problem } from "@/components/Problem";
import { Problem as ProblemType, ProblemStatus } from "@/lib/problems.types";
import React from 'react';
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <>
      <CopilotKit runtimeUrl="/api/copilotkit">
        <AppProvider>
          <Problem/>
        </AppProvider>
        <CopilotPopup />
      </CopilotKit>
    </>
  );
}