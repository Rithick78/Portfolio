import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/hero'
import Skills from "./components/skills/skills"
import Projects from "./components/myProjects/project"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"
import Loader from './components/loader/loader'

const App = () => {

  return (
    <div>
       <Navbar/>
       <Hero/>
       <Skills/>
       <Projects/>
       <Contact/>
       <Footer/>
       <Loader/>
    </div>
  )
}

export default App
