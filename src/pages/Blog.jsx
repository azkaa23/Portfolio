import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import blogPosts from "../data/blogPosts"; // data dipisahkan

const tabClasses = (active) =>
  `px-4 pb-2 text-sm sm:text-base font-medium border-b-2 transition
   ${active ? "text-emerald-600 border-emerald-600" : "text-gray-600 border-transparent hover:text-black"}`;

export default function Blog() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const categories = useMemo(() => {
    const set = new Set();
    blogPosts.forEach((p) => p.tags.forEach((tag) => set.add(tag)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filteredPosts =
    activeTab === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.tags.includes(activeTab));

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10 space-y-10">
      <div class="w-4/5">
      <div className="text-center space-y-1">
        <p className="text-sm sm:text-base font-medium text-gray-700 mb-3">
          Welcome to my blog! Your Source for Expert Tips and Insights!
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={tabClasses(activeTab === cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => navigate(`/blog/${post.id}`)}
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover"
              />
              {post.featured && (
                <span className="absolute top-2 left-2 bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-emerald-600 hover:underline"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {post.date} • {post.comments} Comment
              </p>
            </div>
          </article>
        ))}
      </div>
      </div>
    </div>
  );
}
