// src/pages/Projects.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Kasir System",
    description: "Cashier System built with Laravel and Bootstrap, designed to make cashier management easier.",
    image: "/kasir.png",
    featured: true,
    tech: ["laravel", "bootstrap"],
  },
  {
    id: 2,
    name: "dummy",
    description: "A React Hook for Zustand state management library to simplify hydration.",
    image: "/images/zustand.png",
    featured: true,
    tech: ["js", "ts"],
  },
];

const techIcons = {
  laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
};

export default function Projects() {
  const navigate = useNavigate();

  return ( 
    <div className="w-full max-w-screen-xl pb-14 mx-auto space-y-12 px-4 py-4">
      <div className="w-4/5">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Showcasing my passion for technology, design, and problem-solving through code.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex space-x-2 mt-3">
                  {project.tech.map((tech) => (
                    <img
                      key={tech}
                      src={techIcons[tech]}
                      alt={tech}
                      title={tech}
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
