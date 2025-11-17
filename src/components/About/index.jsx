import React from 'react'
import src from './4.jpg'
import img from './4.jpg'
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
const socialLinks = [
  {
    href: "https://www.linkedin.com/in/muhammadibrahim08/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://github.com/muhammadibrahim46",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "https://www.facebook.com/abraheem.afridi.785850",
    label: "Facebook",
    Icon: FaFacebook,
  },
  {
    href: "https://www.instagram.com/?hl=en",
    label: "Instagram",
    Icon: FaInstagram,
  },
];

function About() {
  return (
    <>
   
      <div className="khan w-300 h-140 py-10 bg-blue-200 mx-20 rounded-2xl shadow-red-400 ">
          <div className='mx-20  flex '>
            <img className='w-20 h-20 rounded-full ' src={src} alt="About" />
              <span className='mt-4 ml-6'>
               <p className='text-emerald-600 '>Hello, I'm</p>
                <h1 className='text-3xl font-bold '>Muhammad Ibrahim</h1>
                 </span>
                  </div> 
                 <span className=' text-bold italic m-100 '>     
                <h1 className='text-3xl text-emerald-600 py-4 mx-13 font-semibold mt-7'>Full Stack Developer</h1>
              <p className='mx-13 text-2xl text-gray-500  leading-relaxed '>Your idea, my code <br />
             together we'll create a website <span className='font-bold'> that wows your audience!</span> <br />
            Let's turn your vision into a modern web experience <br /> that gets noticed!</p>
           </span>
        <div className="mt-4  ml-15 flex flex-wrap gap-3">
      <a href="#contact" className='  inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2  bg-emerald-500 hover:bg-emerald-600 duration-300 text-white font-medium shadow transform transition hover:-translate-y-1.5'>
    Let's Talk  
    <svg
    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
        >
        <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
           ></path>
             </svg>
               </a>
                   <a href="" className='mr-4 inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2  bg-emerald-500 hover:bg-emerald-600 duration-300 text-white font-medium shadow transform transition hover:-translate-y-1.5'>
                     My work
                     </a>
                    </div>
                   <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="text-lg sm:text-xl text-emerald-600 whitespace-nowrap">
                  Find me on
                </span>
                <div className="flex items-center gap-3 ml-2 relative">
                  {socialLinks.map(({ href, Icon, label }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2 rounded-xl hover:scale-120 transform transition duration-150 border border-gray-300 shadow-sm"
                    >
                      <Icon className="text-xl sm:text-2xl text-slate-700" />
                    </a>
                  ))}
                </div>
              </div>
                  <div className='about    flex justify-center items-center w-50 h-50  '>
                  <img src={img} alt="About" />
                  </div>
                </div> 
                
              </>
  )
}

export default About