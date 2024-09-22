'use client'
import React from 'react';
import { useApp } from "@/lib/hooks/use-tasks"; // Import the hook for context access
import { AnimatePresence, motion } from 'framer-motion'; // Assuming you're using framer-motion for animations

const topics = [
  { id: 1, name: "Mathematics", status: "todo" },
  { id: 2, name: "Physics", status: "todo" },
  { id: 3, name: "Chemistry", status: "completed" },
  { id: 4, name: "History", status: "completed" },
  { id: 5, name: "Geography", status: "todo" },
  { id: 6, name: "Biology", status: "completed" },
  { id: 7, name: "Literature", status: "todo" },
  { id: 8, name: "Computer Science", status: "todo" }
];

// Helper component to render each problem
const Topic = ({ problem }) => {
  return (
    <motion.div
      key={problem.id}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="p-2 bg-gray-100 rounded-md shadow-md"
    >
      <p><strong>Question:</strong> {problem.question}</p>
      <p><strong>Topic:</strong> {problem.topic}</p>
      <p><strong>Answer:</strong> {problem.answer}</p>
    </motion.div>
  );
};

// prompt: "can you append 5 more questions like whats on the page"
export function Teacher() {
  const { aproblemSet } = useApp(); // Access aproblemSet from context

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="flex flex-col gap-4 min-w-full md:min-w-[500px]">
        <h1 className="text-2xl font-bold">Teaching Topics</h1>

        <AnimatePresence>
          {aproblemSet // Iterate over the problems from aproblemSet
            .map((problem, index) => (
              <Topic key={index} problem={problem} />
            ))}
        </AnimatePresence>

        {/* Optionally add a button or form to add new topics */}
      </div>
    </main>
  );
};

export default Teacher;
