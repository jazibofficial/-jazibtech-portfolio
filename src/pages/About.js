import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl font-bold text-blue-300 mb-4">About Me</h2>
      <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-lg p-6 w-full">
        <p className="mb-2">Hi, I'm <span className="font-bold">Muhammad Jazib Ali Sher</span> (jazibTech), a web developer and student at <span className="text-blue-200">UCP Lahore</span>, currently in my 5th semester.</p>
        <p className="mb-2">I enjoy building modern, responsive websites and learning new technologies. My interests include React, JavaScript, and UI/UX design.</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-blue-200 mb-2">Skills</h3>
          <ul className="flex flex-wrap gap-2">
            <li className="bg-blue-700 px-3 py-1 rounded-full text-sm">ReactJS</li>
            <li className="bg-blue-700 px-3 py-1 rounded-full text-sm">JavaScript</li>
            <li className="bg-blue-700 px-3 py-1 rounded-full text-sm">HTML5</li>
            <li className="bg-blue-700 px-3 py-1 rounded-full text-sm">CSS3</li>
            <li className="bg-blue-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</li>
            <li className="bg-blue-700 px-3 py-1 rounded-full text-sm">Git</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
} 