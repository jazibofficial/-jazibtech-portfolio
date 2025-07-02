import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS.',
    link: '#',
  },
  {
    title: 'Todo App',
    description: 'A simple and elegant todo app using ReactJS and local storage.',
    link: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard fetching real-time data using a public API.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl font-bold text-blue-300 mb-8">Projects</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-gray-800 bg-opacity-80 rounded-xl shadow-lg p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-blue-200 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a href={project.link} className="mt-auto text-blue-400 hover:underline">View Project</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 