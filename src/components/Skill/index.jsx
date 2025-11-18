import React from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiBootstrap,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";


function Skill() {

  return (
    <>
    <section id='skills'>
    <div className='w-382 h-170 py-10 bg-blue-200 mx-15 rounded-2xl shadow-red-400 mt-15 -ml-7'>
      <div className='text-center '>
        <p className='text-emerald-600'>Skill & Tools</p>
        <h1 className='text-3xl font-bold text-gray-900 '>My Toolbox</h1>
        <p className='my-5 text-gray-600 max-w-2xl mx-auto'>I combine the right tools and technologies to create websites and web apps that <br /> look great, perform flawlessly, and meet your goals.</p>
      </div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <SkillCard
            icon={<SiJavascript className="text-yellow-400 text-5xl" />}
            title="JavaScript"
          />
          <SkillCard
            icon={<SiTailwindcss className="text-cyan-500 text-5xl" />}
            title="Tailwind CSS"
          />
          <SkillCard
            icon={<SiBootstrap className="text-violet-400 text-5xl" />}
            title="Bootstrap"
          />
          <SkillCard
            icon={<FaFigma className="text-pink-500 text-5xl" />}
            title="UI / UX Design"
          />
          <SkillCard
            icon={<SiMongodb className="text-green-700 text-5xl" />}
            title="MongoDB"
          />
          <SkillCard
            icon={<SiExpress className="text-gray-600 text-5xl" />}
            title="Express.js"
          />
          <SkillCard
            icon={<FaReact className="text-blue-500 text-5xl" />}
            title="React.js"
          />
          <SkillCard
            icon={<FaNodeJs className="text-green-600 text-5xl" />}
            title="Node.js"
          />
          <SkillCard
            icon={<FaDatabase className="text-indigo-600 text-5xl" />}
            title="Database Design"
          />
          <SkillCard
            icon={<SiGit className="text-red-600 text-5xl" />}
            title="Git - Version Control"
          />
          <SkillCard
            icon={<SiGithub className="text-black text-5xl" />}
            title="GitHub"
          />
          <SkillCard
            icon={<VscVscodeInsiders className="text-blue-800 text-5xl" />}
            title="Visual Studio Code"
          />
        </div>
        </div>
       </div>
    </section>
    </>
  )
}
const SkillCard = ({ icon, title }) => (
  <div className="flex flex-col items-center justify-center bg-white  w-60 rounded-xl p-6 shadow hover:shadow-xl transition">
    <div className="text-4xl mb-3">{icon}</div>
    <p className="font-semibold">{title}</p>
  </div>
);

export default Skill