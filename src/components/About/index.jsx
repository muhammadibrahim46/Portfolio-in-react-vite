import React from 'react'
import src from './4.jpg'
function About() {
  return (
    <>
    <div className="khan w-300 h-140 py-10 bg-blue-200 mx-20 rounded-2xl shadow-amber-200 ">
        <div className='mx-20  flex '>
            <img className='w-20 h-20 rounded-full ' src={src} alt="About" />
            <span className='mt-4 ml-6'>
             <p className='text-emerald-600 '>Hello, I'm</p>
            <h1 className='text-3xl font-bold '>Muhammad Ibrahim</h1>
            </span>
           </div> 
           <span className=' text-bold italic m-100 '>     
           <h1 className='text-3xl text-emerald-600 py-4 mx-10 font-semibold mt-7'>Full Stack Developer</h1>
          <p className='mx-10 text-2xl text-gray-500  '>Your idea, my code <br />
         together we'll create a website <span className='font-bold'> that wows your audience!</span> <br />
        Let's turn your vision into a modern web experience <br /> that gets noticed!</p>
        </span> 
    </div> 
    </>
  )
}

export default About