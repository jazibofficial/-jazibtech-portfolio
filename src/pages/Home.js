import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-300 mb-4 text-center drop-shadow-lg">Welcome to jazibTech</h1>
      <p className="text-lg sm:text-xl text-gray-200 mb-8 text-center max-w-xl">I'm <span className="font-bold text-blue-200">Muhammad Jazib Ali Sher</span>, a passionate developer and student at UCP Lahore (5th Semester). I love building modern, responsive web apps and learning new tech!</p>
      <a href="/projects" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-lg transition transform hover:scale-105">View My Projects</a>
    </motion.section>
  );
} 