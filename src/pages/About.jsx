import React from "react";

const skillsRow1 = [
  { name: "Figma", icon: "/icons/figma.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Github", icon: "/icons/github.png" },
  { name: "MySQL", icon: "/icons/mysql.png" },
  { name: "Wordpress", icon: "/icons/wordpress.png" },
  { name: "Toad Oracle", icon: "/icons/oracle.png"},
];

const skillsRow2 = [
  { name: "Laravel", icon: "/icons/laravel.png" },
  { name: "TailwindCSS", icon: "/icons/tailwind.png" },
  { name: "C#", icon: "/icons/Csharp.png" },
  { name: "ASP.Net", icon: "/icons/asp.png" },
  { name: "Javascript", icon: "/icons/javascript.png" },
  { name: "PHP", icon: "/icons/php.png" },
];

const tiktokVideos = [
  {
    link: "https://www.tiktok.com/@codebayu.com/video/7321500573122338049",
    thumbnail: "/thumbnails/1.jpg",
  },
  {
    link: "https://www.tiktok.com/@codebayu.com/video/7323273157763126529",
    thumbnail: "/thumbnails/2.jpg",
  },
  {
    link: "https://www.tiktok.com/@codebayu.com/video/7325000000000000000",
    thumbnail: "/thumbnails/3.jpg",
  },
  {
    link: "https://www.tiktok.com/@codebayu.com/video/7325000000000000001",
    thumbnail: "/thumbnails/4.jpg",
  },
];

export default function About() {
  return (
    <div className="w-full max-w-screen-xl pb-14 mx-auto space-y-12 px-4 py-4">
      <div className="w-4/5 pr-5">
        <h1 className="text-2xl font-semibold mb-2">About</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">A short story of me</p>
        <hr className="border-dashed mb-6" />

        <p className="mb-4">
          Hi! I am Muhamad Azka Mubarok, a seasoned software engineer with a deep passion for creating elegant and efficient solutions through code. Over the years, I have honed my skills in various technologies and frameworks, focusing mainly on frontend development. My journey started from understanding the fundamentals of web technologies, and over time, I transitioned into building complex web applications using React and other modern tools.
        </p>
        <p className="mb-4">
          As a fast learner and adaptive thinker, I thrive in dynamic environments and love to explore new challenges. I believe that continuous learning is the key to staying ahead in the tech world. Whether it's diving into a new framework or optimizing the user experience, I am always excited to tackle problems and find the best possible solutions.
        </p>
        <p className="mb-4">
          This blog is my platform to share insights, experiences, and discoveries with fellow tech enthusiasts. It’s a place where I can document my learnings, thoughts on new trends in software development, and the occasional fun experiment. I hope to inspire others and contribute to the growing community of developers who are passionate about innovation and learning.
        </p>
        <p className="mb-6">
          Thank you for visiting, and I look forward to embarking on this knowledge-sharing adventure with all of you.
        </p>
      </div>

      {/* Career Section */}
      <section>
        <div className="px-2 sm:px-2 max-w-4xl">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span>💼</span> Career
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">My professional career journey</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CareerCard
              title="Fullstack Developer"
              company="Mede Media Softika"
              location="Jakarta"
              period="January 2024 - July 2024"
              duration="~ 6 Month"
              logo="/icons/mede.png"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-10">
  <div className="px-2 sm:px-2 max-w-4xl">
    <h2 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2 mb-2">
      <span className="text-3xl">💻</span> Skills
    </h2>
    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">My coding skills</p>

    {/* Row 1 */}
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-4 animate-marquee w-max">
        {[...skillsRow1, ...skillsRow1].map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow dark:shadow-lg text-sm whitespace-nowrap border border-gray-200 dark:border-gray-700"
          >
            <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
            {skill.name}
          </div>
        ))}
      </div>
    </div>

    {/* Row 2 */}
    <div className="relative w-full overflow-hidden mt-6">
      <div className="flex gap-4 animate-marquee-reverse w-max">
        {[...skillsRow2, ...skillsRow2].map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow dark:shadow-lg text-sm whitespace-nowrap border border-gray-200 dark:border-gray-700"
          >
            <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      <section className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-md max-w-4xl">
  {/* TikTok  */}
  {/* <div className="flex flex-col items-center text-center mb-8">
    <img
      src="/profil.jpg" // Ganti dengan path foto profil kamu
      alt="Profile"
      className="w-24 h-24 rounded-full border-4 border-white shadow-md mb-3"
    />
    <h3 className="text-xl font-semibold">@AzkaaMuhamad23</h3>
    <p className="text-sm text-gray-500">
      Frontend Dev • React & Laravel • Sharing coding vibes 👨‍💻
    </p>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
    {[
      {
        link: "https://www.tiktok.com/@azkaamuhamad23/",
        thumbnail: "/tiktok/thumb1.jpg",
      },
      {
        link: "https://www.tiktok.com/@azkaamuhamad23/",  
        thumbnail: "/tiktok/thumb2.jpg",  
      },
      {
        link: "https://www.tiktok.com/@azkaamuhamad23/",
        thumbnail: "/tiktok/thumb3.jpg", 
      }
    ].map((video, idx) => (
      <a
        key={idx}
        href={video.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group aspect-[4/5] overflow-hidden rounded-md"
      >
        <img
          src={video.thumbnail}
          alt={`TikTok ${idx + 1}`}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </a>
    ))}
  </div> */}
</section>


    </div>
  );
}

function CareerCard({ title, company, location, period, duration, logo }) {
  return (
    <div className="relative bg-white dark:bg-gray-800 p-4 pl-24 rounded-xl shadow-md dark:shadow-lg border border-gray-500 dark:border-gray-700">
      <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-20 h-20 rounded-full border border-gray-500 shadow-md flex items-center justify-center bg-[#f9fafb] z-10">
        <img src={logo} alt={company} className="w-12 h-12 rounded-full object-contain" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{company} ・ {location}</p>
        <p className="text-sm text-gray-500">{period}</p>
        <p className="text-xs text-gray-400">{duration}</p>
      </div>
    </div>
  );
}
