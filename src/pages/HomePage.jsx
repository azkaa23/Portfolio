import React, { useState, useEffect, useRef } from "react";

export function HomePage() {
  const roles = [
    "Muhamad Azka Mubarok",
    "Software Engineer",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  // Typing Effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(roles[index].substring(0, subIndex));
      if (forward) {
        if (subIndex < roles[index].length) {
          setSubIndex((prev) => prev + 1);
        } else {
          setForward(false);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else {
          setForward(true);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, forward ? 150 : 50);
    return () => clearTimeout(timeout);
  }, [subIndex, index, forward]);

  // Drag Scroll Logic
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const services = [
    {
      title: "Website Development",
      desc: "Create stunning, user-friendly fullstack web applications using modern technologies.",
      tag: "coding",
      img: "/service-web.png",
    },
    {
      title: "UI/UX Design",
      desc: "Design stunning user experiences.",
      tag: "design",
      img: "/service-uiux.png", 
    },
  ];

  return (
    <div className="w-full max-w-screen-2xl pb-14 mx-auto space-y-12 px-4 overflow-x-hidden">
    <div className="w-4/5">
      {/* Intro */}
      <div className="bg-transparent dark:bg-gray-800 pt-10 rounded-lg max-w-6xl transition">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white h-12">
              {text}
              <span className="animate-blink">|</span>
            </h1>
            <ul className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex space-x-8 list-disc pl-4">
              <li>Freelancer</li>
              <li>Based in Bogor</li>
            </ul>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl">
              Passionate and seasoned Software Engineer with a strong focus on frontend development.
            </p>
            <hr className="my-4 border-gray-300 dark:border-gray-600" />
          </div>
        </div>
      </div>

      {/* Latest Articles */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 mt-6">📚 Latest Articles</h2>
        <div
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="flex gap-4 max-w-4xl px-1">
          {[...Array(10)].slice(0, 5).map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 w-[300px] flex-shrink-0 p-4 rounded-lg shadow"
              >
                <div className="h-40 bg-gray-100 dark:bg-gray-700 mb-2 rounded" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Article #{i + 1}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Apr 23, 2025</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mt-12 max-w-6xl">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">🛠️ Services</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">I can deliver the following services</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative bg-white dark:bg-gray-800 p-6 rounded-lg border shadow transition group hover:shadow-lg duration-300"
            >
              <span className="absolute top-3 right-3 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 px-2 py-1 rounded-full">
                {service.tag}
              </span>
              <div className="h-32 mb-4 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full object-contain pointer-events-none"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
