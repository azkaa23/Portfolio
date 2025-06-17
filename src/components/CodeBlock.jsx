import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, prism } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ code, language = "javascript", darkMode = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative rounded-md overflow-hidden">
      {/* Header */}
      <div className={`flex items-center justify-between px-4 py-2 ${
        darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
      }`}>
        <div className="text-sm font-mono">{language}</div>
        <button
          onClick={handleCopy}
          className={`text-xs px-3 py-1 rounded flex items-center space-x-1 ${
            darkMode 
              ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {copied ? (
            <>
              <span>✓</span>
              <span>Copied</span>
            </>
          ) : (
            <>
              <span>⎘</span>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <SyntaxHighlighter
        language={language}
        style={darkMode ? vscDarkPlus : prism}
        customStyle={{
          marginTop: 0,
          borderRadius: 0,
          borderBottomLeftRadius: "0.375rem",
          borderBottomRightRadius: "0.375rem",
          fontSize: "0.9rem",
          padding: "1rem"
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
