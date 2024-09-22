"use client";

import { TasksList } from "@/components/TasksList";
import { AppProvider, TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import { Problem } from "@/components/Problem";
import { Problem as ProblemType, ProblemStatus } from "@/lib/problems.types";
import React from 'react';
import Teacher from '@/components/Teacher';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <>
      <Router>
      <CopilotKit runtimeUrl="/api/copilotkit">
        <AppProvider>
          <Switch>
            <Route path="/teacher" component={Teacher} />
            <Route path="/" exact>
              <Problem /> {/* Default route to the Problem component */}
            </Route>
          </Switch>
        </AppProvider>
        <CopilotPopup />
      </CopilotKit>
    </Router>
    </>
  );
}