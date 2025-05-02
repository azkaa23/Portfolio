import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Kasir System",
    description:
      "Cashier System built with Laravel and Bootstrap, designed to make cashier management easier.",
    image: "/kasir.png",
    featured: true,
    tech: ["laravel", "bootstrap"],
    source: "https://github.com/azkaa23/app-kasir",
    demo: "https://kasir-demo.vercel.app",
  },
  {
    id: 2,
    name: "dummy",
    description:
      "A React Hook for Zustand state management library to simplify hydration.",
    image: "/images/zustand.png",
    featured: true,
    tech: ["js", "ts"],
    source: "https://github.com/yourusername/zustand-hook",
    demo: "https://zustand-demo.vercel.app",
  },
];

const techIcons = {
  laravel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-center mt-10 text-red-500 dark:text-red-400">
        Project not found
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 pb-14 overflow-x-hidden">
      <div className="w-4/5">
        {/* Tombol Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-gray-500 dark:text-gray-700 mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </button>

        {/* Nama & Deskripsi */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {project.name}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <hr className="border-dashed border-gray-300 dark:border-gray-600 mb-4" />

        {/* Tech Stack + Links */}
        <div className="flex justify-between items-center flex-wrap mb-8 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600 dark:text-gray-400">Tech Stack:</span>
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

          <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <Github size={16} />
              Source Code
            </a>
            <span className="text-gray-400">|</span>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </div>
        </div>

        {/* Gambar Project */}
        <div className="overflow-x-auto">
          <img
            src={project.image}
            alt={project.name}
            className="w-full max-w-full rounded-xl border border-gray-300 dark:border-gray-700 shadow-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
