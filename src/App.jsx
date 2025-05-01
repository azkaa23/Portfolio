import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./pages/HomePage";
import About from "./pages/About";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Router> 
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="flex-1 p-5 h-full text-gray-900 dark:text-white">
            <Routes> 
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}
