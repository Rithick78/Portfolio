import React from 'react'
import "./HeroComponent.css"
import bye from "../../assets/wave.png"
import rithick from "../../assets/rithick.PNG"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Cv from "../../assets/CV.png"
import linkedin from "../../assets/linkedin2.png"
import github from "../../assets/github.png"



const HeroComponent = () => {
   
  const [typeEffect] = useTypewriter({
    words: ['Web Designer', 'Frontend Web Developer.'],
    loop: 1,
    typeSpeed: 150,
    delaySpeed: 700,
  })
  return (
    <div id='about' className="hero flex ">
                <h1 className='title-h'>About Me</h1>
      <div className='hero-right'>
        <div 
           data-aos="fade-down" 
           data-aos-duration="1500" 
           data-aos-once="true" 
           data-aos-easing="ease-in-out"
        className="hero-name">
          <h1> Hello <img className='' src={bye} /> , Myself <br /><span>Rithick Jackson</span></h1>
          <h2>I'm a <span>{typeEffect}</span></h2>
        </div>
        <div 
            data-aos="fade" 
            data-aos-duration="1500" 
            data-aos-once="true" 
            data-aos-easing="ease-in-out"
        className="hero-about ">
          <p>I'm a passionate <span>Frontend Web Developer </span> 
           with a strong <br />interest in creating engaging and 
          responsive website. As a fresher,<br /> I'm eager to learn
           and grow continuously in the field of frontend development.  </p>
           <p>Successfully completed a Frontend Web Development course at <br />Greens Technology, Chennai, in 2024.</p>
        </div>
        <div 
           data-aos="fade-up" 
           data-aos-duration="1500" 
           data-aos-once="true" 
           data-aos-easing="ease-in-out"
        className="hero-btn">
          <button className='btn-1'><a href="Resume.pdf" download="CV.pdf">Download CV</a> <img src={Cv} /></button>
          <button className='btn-2'> <a href="FRONTEND WEB DEVELOPMENT COURSE.pdf" download="FWD Certificate.pdf">Certification </a></button>
        </div>
        <div
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-once="true" 
            data-aos-easing="ease-in-out"
        className="social-media">  
             <a href="https://github.com/Rithick78"><img  src={github}  /></a>  
             <a href="https://www.linkedin.com/in/rithick-jackson-51215933b/"><img src={linkedin} /></a>
        </div>
       </div>
       <div
           data-aos="zoom-out-left" 
           data-aos-duration="2000" 
           data-aos-once="true" 
           data-aos-easing="ease-in-out"
       className="hero-left">
          <img src={rithick} />
        </div>
        
    </div>

  )
}

export default HeroComponent
