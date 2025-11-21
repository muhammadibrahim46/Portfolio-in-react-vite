import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skill from './components/Skill'
import Service from './components/Services'
import Opensource   from './components/Opensource'
import Contect from './components/Contect'
import Foter from './components/footer'


function App() {
  return (
    < >
    <div className='h-800' >
     
      <Navbar/>
      <About/>
      <Skill/>
      <Service/>
      <Opensource/>
    <Contect/>
    <Foter/>
    </div>
    </>
  )
}

export default App