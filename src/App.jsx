import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from "./components/skills/skills"
import Projects from "./components/myProjects/project"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"

const App = () => {

  return (
    <div>
       <Navbar/>
       <Hero/>
       <Skills/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App
