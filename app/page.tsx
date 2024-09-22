"use client";

import { TasksList } from "@/components/TasksList";
import { AppProvider, TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import { Problem } from "@/components/Problem";
import { Problem as ProblemType, ProblemStatus } from "@/lib/problems.types";
import React from 'react';
import Teacher from '@/components/Teacher';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Link from 'next/link';
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <>
      <Router>
      <CopilotKit runtimeUrl="/api/copilotkit">
        <AppProvider>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/student">Student</Link>
          <Link href="/teacher">Teacher</Link>
        </nav>
        {/* Default component for home route */}
        <Problem />
        </AppProvider>
        <CopilotPopup />
      </CopilotKit>
    </Router>
    </>
  );
}