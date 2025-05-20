import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectsDetail from './pages/ProjectsDetail'; 
import Contact from './pages/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Router> 
      <div className="flex w-screen h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="flex-1 w-full h-full overflow-y-auto p-5 text-gray-900 dark:text-white transition-all duration-300 ml-16 md:ml-72">
            <Routes> 
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectsDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}
