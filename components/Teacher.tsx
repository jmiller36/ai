import React from 'react';
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

// Helper component to render each topic
const Topic = ({ topic }) => {
  return (
    <motion.div
      key={topic.id}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="p-2 bg-gray-100 rounded-md shadow-md"
    >
      <p>{topic.name}</p>
    </motion.div>
  );
};

const Teacher = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="flex flex-col gap-4 min-w-full md:min-w-[500px]">
        <h1 className="text-2xl font-bold">Teaching Topics</h1>

        <AnimatePresence>
          {topics
            .sort((a, b) => {
              if (a.status === b.status) {
                return a.id - b.id; // Sort by id if status is the same
              }
              return a.status === "todo" ? -1 : 1; // Sort by status: todos first
            })
            .map((topic) => (
              <Topic key={topic.id} topic={topic} />
            ))}
        </AnimatePresence>

        {/* Optionally add a button or form to add new topics */}
      </div>
    </main>
  );
};

export default Teacher;
