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
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  });

  return (
    <>
      {
        isMounted && 
      <CopilotKit runtimeUrl="/api/copilotkit">
        <AppProvider>
        {/* Conditionally render Problem or Teacher based on the route */}
        {window.location.pathname === '/teacher' ? <Teacher /> : <Problem />}
        <CopilotPopup />
        </AppProvider>
      </CopilotKit>}
    </>
  );
}