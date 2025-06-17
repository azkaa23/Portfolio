import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogPosts from "../data/blogPosts";
import CodeBlock from "../components/CodeBlock";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaLine,
  FaEnvelope,
} from "react-icons/fa";

export default function BlogDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  const [showShare, setShowShare] = useState(false);
  const popupRef = useRef();
  const currentUrl = window.location.href;

  // Fungsi copy URL ke clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert("Link berhasil disalin ke clipboard!");
    } catch (err) {
      console.error("Gagal menyalin:", err);
      alert("Gagal menyalin link. Silakan salin secara manual.");
    }
  };

  // Event listener untuk klik di luar popup share
  useEffect(() => {
    if (!showShare) return;

    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowShare(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showShare]);

  if (!post) return <p className="text-center mt-10">Post not found.</p>;

  // Safety check jika steps tidak ada
  const installCommands =
    post.content.installation?.steps
      ?.map((step) => step.instruction)
      .join("\n") || "";

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10 space-y-10 relative">
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
          <button
            onClick={() => setShowShare(true)}
            className="text-sm text-gray-600 flex items-center gap-1 hover:text-black"
            aria-label="Share post"
          >
            <span>🔗 Share</span>
          </button>
        </div>

        {/* Share Popup */}
        {showShare && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black opacity-50" />

            {/* Popup Box */}
            <div
              ref={popupRef}
              className="relative z-10 bg-white rounded-xl shadow-xl border px-6 py-5 w-[340px]"
            >
              <h3 className="text-base font-semibold mb-4 text-gray-800">
                Bagikan ke
              </h3>
              <div className="flex flex-wrap gap-4 text-[22px] mb-4">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    currentUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  <FaWhatsapp className="text-[#25D366] hover:scale-110 transition-transform cursor-pointer" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    currentUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <FaFacebookF className="text-[#1877F2] hover:scale-110 transition-transform cursor-pointer" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    currentUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <FaTwitter className="text-[#1DA1F2] hover:scale-110 transition-transform cursor-pointer" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    currentUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-[#0077B5] hover:scale-110 transition-transform cursor-pointer" />
                </a>
                <a
                  href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
                    currentUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LINE"
                >
                  <FaLine className="text-[#00C300] hover:scale-110 transition-transform cursor-pointer" />
                </a>
                <a
                  href={`mailto:?subject=Check this blog&body=${encodeURIComponent(
                    currentUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Email"
                >
                  <FaEnvelope className="text-gray-600 hover:scale-110 transition-transform cursor-pointer" />
                </a>
              </div>
              <div className="text-sm text-gray-600 mb-2">Salin tautan</div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={currentUrl}
                  className="border px-2 py-1 rounded text-sm w-full bg-gray-100 text-gray-800"
                  aria-label="URL blog post"
                />
                <button
                  onClick={copyToClipboard}
                  className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        )}

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

        {/* Benefits */}
        {post.content.benefits && (
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
        )}

        {/* Installation */}
        {post.content.installation && (
          <div className="space-y-4 mt-10">
            <h2 className="text-xl font-semibold">
              {post.content.installation.title}
            </h2>
            <p className="text-gray-700">{post.content.installation.description}</p>
            <CodeBlock language="bash" code={installCommands} darkMode={true} />
            {post.content.installation.note && (
              <p className="text-sm text-gray-600">{post.content.installation.note}</p>
            )}
          </div>
        )}

        {/* Concepts */}
        {post.content.concepts && (
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
        )}

        {/* Example Project */}
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

        {post.content.sections?.map((section, index) => (
  <div key={index} className="mb-10">
    <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
    {section.description && (
      <p className="mb-3 whitespace-pre-line">{section.description}</p>
    )}

    {section.points && (
      <ul className="list-disc list-inside mb-3">
        {section.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    )}

    {section.table && (
      <div className="overflow-x-auto mb-3">
        <table className="min-w-full table-auto border border-gray-400 text-sm">
          <thead className="bg-gray-400">
            <tr>
              {section.table[0].map((header, i) => (
                <th key={i} className="px-3 py-2 border">
                  {header}
                  
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.table.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex} className="odd:bg-white even:bg-gray-50">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-3 py-2 border">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

{section.code && (
  <CodeBlock
    language={section.code.language}
    code={section.code.content}
    darkMode={true} // atau false sesuai tema kamu
  />
)}

  </div>
))}

        {/* Conclusion */}
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
