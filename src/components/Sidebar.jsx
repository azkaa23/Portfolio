import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {
  Sun,
  Moon,
  Home,
  Leaf,
  Pencil,
  Briefcase,
  GitBranch,
  LayoutDashboard,
  MessageCircle,
  Send,
  Grid,
  Heart,
} from "lucide-react";

export function Sidebar({ darkMode, setDarkMode }) {
  const [isHovered, setIsHovered] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const menus = [
    { icon: Home, label: "Home", to: "/" },
    { icon: Leaf, label: "About", to: "/about" },
    // { icon: Pencil, label: "Blog", to: "/blog" },
    { icon: Briefcase, label: "Projects", to: "/projects" },
    // { icon: GitBranch, label: "Roadmap", to: "/roadmap" },
    // { icon: LayoutDashboard, label: "Task Board", to: "/tasks" },
    // { icon: MessageCircle, label: "Chat Room", to: "/chat" },
    { icon: Send, label: "Contact", to: "/contact" },
    // { icon: Grid, label: "More", to: "/more" },
  ];

  return (
    <aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 h-screen z-50 flex flex-col justify-between border-r transition-all duration-500 ease-in-out 
        ${isHovered ? "w-72 px-6" : "w-16 px-2 items-center"} 
        ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-900"} 
        shadow-md rounded-tl-lg rounded-tr-lg`}
      style={{
        boxShadow: isHovered
          ? "4px 0px 10px rgba(0, 0, 0, 0.1)"
          : "2px 0px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* TOP SECTION */}
      <div className="pt-6">
        <div className="flex flex-col items-center justify-center gap-2 relative transition-all duration-300 ease-in-out">
          {!isHovered && (
            <>
              <img
                src="/profil.jpg"
                alt="Profile"
                className={`rounded-full object-cover border transition-all duration-300 ${
                  isHovered ? "w-10 h-10" : "w-12 h-12 scale-110"
                }`}
              />
              <button
                onClick={toggleDarkMode}
                className={`bg-white dark:bg-gray-800 rounded-full shadow transition-all duration-300 ${
                  isHovered ? "p-1 mt-4" : "p-2 mt-6 scale-110"
                }`}
              >
                {darkMode ? (
                  <Moon size={isHovered ? 18 : 20} className="text-yellow-400 transition-all duration-300" />
                ) : (
                  <Sun size={isHovered ? 18 : 20} className="text-gray-500 hover:text-yellow-500 transition-all duration-300" />
                )}
              </button>

              <hr
                className={`transition-all duration-500 ease-in-out border-t-2 rounded-full border-gray-300 dark:border-gray-600 ${
                  isHovered ? "w-full mt-6" : "w-10 mt-8"
                }`}
              />
            </>
          )}
        </div>

        {isHovered && (
          <>
            <div className="relative w-full mb-12 transition-all duration-500">
              {/* Banner */}
              <div className="w-full h-20 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <img
                  src="/background.png"
                  alt="Banner"
                  className="object-cover w-full h-full transition-all duration-500"
                />
              </div>

              {/* Foto Profil */}
              <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2">
                <img
                  src="/profil.jpg"
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-4 border-white object-cover transition-all duration-500"
                />
              </div>

              {/* Hire Me Tag */}
              <div className="absolute top-2 left-2">
                <span className="text-xs font-medium bg-green-100 text-green-600 px-2 py-1 rounded-full">
                  ● Hire me.
                </span>
              </div>

              {/* Tombol Dark Mode */}
              <button
                onClick={toggleDarkMode}
                className="absolute bottom-2 right-2 bg-white dark:bg-gray-800 p-1 rounded-full shadow transition-all duration-300"
              >
                {darkMode ? (
                  <Moon size={18} className="text-yellow-400" />
                ) : (
                  <Sun size={18} className="text-gray-500 hover:text-yellow-500" />
                )}
              </button>
            </div>

            {/* Nama dan Username */}
            <div className="text-center mt-2 transition-all duration-500">
              <h1 className="font-bold text-lg text-gray-900 dark:text-white">Azka Mubarok</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">@azkawhaat</p>
            </div>
            <hr className="my-4 border-gray-200 dark:border-gray-700" />
          </>
        )}
      </div>

      {/* MENU */}
      <nav className={`mt-2 ${isHovered ? "" : "mt-4"}`}>
        <ul className="space-y-2">
          {menus.map(({ icon: Icon, label, to }, i) => (
            <li key={i}>
              <Link
                to={to}
                className={`flex items-center gap-4 px-3 py-2 rounded-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 ${isHovered ? "justify-start" : "justify-center"}`}
              >
                <Icon size={isHovered ? 20 : 24} className="transition-all duration-300" />
                {isHovered && (
                  <span className="transition-all duration-300 ease-in-out">{label}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* BOTTOM ICON */}
      <div className="pb-6 flex justify-center mt-auto">
        <Heart className="text-red-500" />
      </div>
    </aside>
  );
}
