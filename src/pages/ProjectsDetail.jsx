// src/pages/ProjectDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Copy } from "lucide-react";
import { useState } from "react";
import projects from "../data/projects";

const techIcons = {
  laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
};

const frontendStacks = ["js", "ts", "react", "vue"];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));
  const [showFeatures, setShowFeatures] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!project) {
    return (
      <div className="text-center mt-10 text-red-500 dark:text-red-400">
        Project not found
      </div>
    );
  }

  const hasFrontend = project?.tech
    ?.map((tech) => tech.toLowerCase())
    .some((tech) => frontendStacks.includes(tech));

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 pb-14 overflow-x-hidden">
      <div className="w-4/5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </button>

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {project.name}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <hr className="border-dashed border-gray-300 dark:border-gray-600 mb-4" />

        <div className="flex justify-between items-center flex-wrap mb-8 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600 dark:text-gray-400">Tech Stack:</span>
            {project.tech.map((tech) => (
              <img
                key={tech}
                src={techIcons[tech.toLowerCase()]}
                alt={tech}
                title={tech}
                className="w-5 h-5"
              />
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
              {project.isTeamProject ? (
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 italic">
                  Source code tidak tersedia untuk proyek tim.
                </div>
              ) : (
                project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                )
            )}


            {hasFrontend && project.demo && (
              <>
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
              </>
            )}
          </div>
        </div>

        <div className="overflow-x-auto mb-10">
          <img
            src={project.image}
            alt={project.name}
            className="w-full max-w-full rounded-xl border border-gray-300 dark:border-gray-700 shadow-md object-contain"
          />
        </div>

        {project.features.length > 0 && (
          <>
            <button
              onClick={() => setShowFeatures(!showFeatures)}
              className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              {showFeatures ? "Sembunyikan Fitur" : "Cek Fitur Selengkapnya"}
            </button>

            {showFeatures && (
              <div className="overflow-x-auto mb-10">
                <table className="min-w-full text-sm border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-800 text-left">
                      <th className="px-4 py-2 border">Role</th>
                      <th className="px-4 py-2 border">Halaman / Fitur</th>
                      <th className="px-4 py-2 border">Deskripsi Singkat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.features.map((feature, idx) => (
                      <tr key={idx} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-4 py-2 border">{feature.role}</td>
                        <td className="px-4 py-2 border">{feature.page}</td>
                        <td className="px-4 py-2 border">{feature.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {project.setup.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Setup Instructions
            </h2>

            <div className="space-y-4">
              {project.setup.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {item.step}
                  </h3>
                  {item.command && (
                    <div className="relative">
                      <pre className="bg-gray-800 text-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-lg p-4 overflow-x-auto">
                        <code>{item.command}</code>
                      </pre>
                      <button
                        onClick={() => copyToClipboard(item.command, index)}
                        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedIndex === index ? (
                          <span className="text-green-400">Copied!</span>
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  )}
                  {item.description && (
                    <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
                      <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                        {item.description}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {project.notes.length > 0 && (
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 space-y-2 mt-6">
            <h3 className="font-medium text-blue-800 dark:text-blue-200">
              Important Notes
            </h3>
            <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-1">
              {project.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul> 
          </div>
        )}
      </div>
    </div>
  );
}
