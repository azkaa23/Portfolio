import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogPosts from "../data/blogPosts";
import CodeBlock from "../components/CodeBlock";

export default function BlogDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) return <p className="text-center mt-10">Post not found.</p>;

  const installCommands = post.content.installation.steps.map((s) => s.instruction).join('\n');

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10 space-y-10">
      <div className="w-4/5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-black mb-6"
        >
          <span className="text-xl">&larr;</span> Back
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{post.title}</h1>

        <div className="text-sm text-gray-500 flex flex-wrap gap-4 mb-4 items-center">
          <span>Published on {post.date}</span>
          <span>👁 {post.views} Views</span>
          <span>⏱ {post.readTime}</span>
          <span>💬 {post.comments} Comment</span>
          <span>🔗 Share</span>
        </div>

        <hr className="border-dashed mb-6" />

        <img
          src={post.image}
          alt={post.title}
          className="w-full max-h-[400px] object-cover rounded-lg mb-8"
        />

        {/* Intro */}
        {post.content.intro && (
          <p className="text-gray-700 text-lg mb-6">{post.content.intro}</p>
        )}

        {/* Benefit */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Keunggulan React.js</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            {post.content.benefits.map((benefit, index) => (
              <li key={index}>
                <strong>{benefit.title}:</strong> {benefit.description}
              </li>
            ))}
          </ol>
        </div>

        {/* Instalasi */}
        <div className="space-y-4 mt-10">
          <h2 className="text-xl font-semibold">{post.content.installation.title}</h2>
          <p className="text-gray-700">{post.content.installation.description}</p>
          <CodeBlock language="bash" code={installCommands} darkMode={true} />
          {post.content.installation.note && (
            <p className="text-sm text-gray-600">{post.content.installation.note}</p>
          )}
        </div>

        {/* Konsep Dasar */}
        <div className="space-y-8 mt-10">
          <h2 className="text-xl font-semibold">{post.content.concepts.title}</h2>
          {post.content.concepts.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="font-semibold text-lg">{section.name}</h3>
              <p className="text-gray-700 whitespace-pre-line">{section.description}</p>
              {section.code && (
                <CodeBlock
                  language={section.code.language}
                  code={section.code.content}
                  darkMode={true}
                />
              )}
            </div>
          ))}
        </div>

        {/* Proyek Contoh */}
        {post.content.exampleProject && (
          <div className="space-y-4 mt-10">
            <h2 className="text-xl font-semibold">{post.content.exampleProject.title}</h2>
            <CodeBlock
              language={post.content.exampleProject.code.language}
              code={post.content.exampleProject.code.content}
              darkMode={true}
            />
          </div>
        )}

        {/* Tips */}
        {post.content.tips && (
          <div className="space-y-4 mt-10">
            <h2 className="text-xl font-semibold">{post.content.tips.title}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {post.content.tips.list.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Kesimpulan */}
        {post.content.conclusion && (
          <div className="space-y-2 mt-10">
            <h2 className="text-xl font-semibold">{post.content.conclusion.title}</h2>
            <p className="text-gray-700">{post.content.conclusion.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}
