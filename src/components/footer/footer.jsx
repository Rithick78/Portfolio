import React from 'react'
import "./footer.css"
import insta from '../../assets/instagram.png'
import twitter from "../../assets/twitter.png"

const footer = () => {
  return (
    <div
        data-aos="fade-up" 
        data-aos-duration="2500" 
        data-aos-once="true" 
        data-aos-easing="ease-in-out"
    className='footer'>
        <div className="footer-sec flex justify-evenly  gap-250">
       <div className="footer-left flex flex-col items-center">
           <h1>Rithick</h1>
        <span>I'm Frontend web developer from,Chennai </span>
        </div>
        <div className="footer-right flex gap-15">
          <a href="https://x.com/RithickJackson"><img src={twitter} /></a>
          <a href="https://www.instagram.com/rithick.jackson/"><img src={insta} /></a>
        </div>
        </div>
<div className="footer-sec-d flex items-center justify-evenly gap-200">
    <div className="foot-left">
        <span>© 2025 Rithick Jackson.All rights reserved.</span>
    </div>
    <div className="foot-right flex justify-end ">
        <p>Terms of Sevices </p>
        <p>Privacy Policy</p>
        <p>Connect With Me</p>

    </div>
</div>
        
    </div>
    
  )
}

export default footer
