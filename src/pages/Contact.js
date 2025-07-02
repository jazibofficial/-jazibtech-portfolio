import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-xl mx-auto flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl font-bold text-blue-300 mb-4">Contact</h2>
      <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-lg p-6 w-full flex flex-col gap-4">
        <div>
          <span className="font-semibold text-blue-200">Phone:</span> <a href="tel:03187364391" className="text-blue-400 hover:underline">0318-7364391</a>
        </div>
        <div>
          <span className="font-semibold text-blue-200">Email:</span> <a href="mailto:jazibalisher@gmail.com" className="text-blue-400 hover:underline">jazibalisher@gmail.com</a>
        </div>
        <div>
          <span className="font-semibold text-blue-200">LinkedIn:</span> <a href="https://www.linkedin.com/in/muhammad-jazib-ali-sher-433b962b9/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">muhammad-jazib-ali-sher</a>
        </div>
      </div>
    </motion.section>
  );
} 