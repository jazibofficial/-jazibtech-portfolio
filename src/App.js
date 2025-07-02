import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white flex flex-col">
      {/* Header */}
      <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, type: 'spring' }} className="p-6 flex flex-col sm:flex-row items-center justify-between bg-gray-950 bg-opacity-80 shadow-lg sticky top-0 z-50">
        <NavLink to="/" className="text-3xl font-bold tracking-tight text-blue-400 drop-shadow-lg">jazibTech</NavLink>
        <nav className="mt-4 sm:mt-0 flex gap-4 text-lg">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-300 transition'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-300 transition'}>About</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-300 transition'}>Projects</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-300 transition'}>Contact</NavLink>
        </nav>
      </motion.header>

      {/* Main Content */}
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="flex-1 flex flex-col items-center justify-center px-4 py-10 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.main>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-4 text-sm bg-gray-950 bg-opacity-80 mt-auto">
        &copy; {new Date().getFullYear()} jazibTech. All rights reserved.
      </footer>
    </div>
  );
}
