import React from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const opensource = [
  {
    id: 1,
    title: "Portfolio Website",
    Paragraph: "A personal portfolio website to showcase my skills, projects, and contact info using React and Tailwind CSS.",
    icon:"https://github.com/muhammadibrahim46",
     tech: ["React", "Redux", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Weather App",
    Paragraph: "A real-time weather app that fetches data from an API using React and Tailwind CSS.",
    icon:"https://github.com/muhammadibrahim46",
     tech: ["React", "Redux", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Todo App",
    Paragraph: "A simple and clean todo app using React, Redux, and Tailwind CSS.",
    icon:"https://github.com/muhammadibrahim46",
     tech: ["React", "Redux", "Tailwind CSS"],
  }
];

function Opensource() {
  return (
    <section id="opensource">
      <div className="bg-blue-200 py-20 min-w-2xs">
        
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm text-emerald-600 font-medium ">What I build</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-1">
            Open Source Projects
          </h1>
          <p className="text-gray-600 mt-1">
            I create open source projects that solve real problems, showcase modern technologies, <br /> and demonstrate best practices...
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {opensource.map((item) => (
            <div 
              key={item.id} 
              className="p-10 bg-white  rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-700 mt-2">{item.Paragraph}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span 
                    key={t} 
                    className="text-sm bg-emerald-50 border border-green-200 text-emerald-600 px-2 py-1 rounded-full font-medium"
                  >
                    {t}
                  </span>
                  
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={item.icon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-800 hover:text-emerald-500 duration-300 font-semibold"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Opensource;
