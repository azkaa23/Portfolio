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
    name: "Portfolio Website",
    description: "A personal portfolio website built using React and Tailwind CSS.",
    image: "/images/portfolio.png",
    featured: false,
    tech: ["js"],
  },
    
  {
    id: 3,
    name: "SIM PKL",
    description: "SIMPKL System built with Laravel and Bootstrap,designed to make internship management easier",
    image: "/simpkl.png",
    featured: true,
    tech: ["laravel", "bootstrap"],
  },
  {
    id: 4,
    name: "dummy",
    description: "dummy.",
    image: "/images/zustand.png",
    featured: true,
    tech: ["js", "ts"],
  },

];

const techIcons = {
  asp: "/icons/asp.png",
  csharp: "/icons/Csharp.png",
  figma: "/icons/figma.png",
  github: "/icons/github.png",
  javascript: "/icons/javascript.png",
  laravel: "/icons/laravel.png",
  mede: "/icons/mede.png",
  mysql: "/icons/mysql.png",
  oracle: "/icons/oracle.png",
  php: "/icons/php.png",
  react: "/icons/react.png",
  tailwind: "/icons/tailwind.png",
  wordpress: "/icons/wordpress.png",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
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
