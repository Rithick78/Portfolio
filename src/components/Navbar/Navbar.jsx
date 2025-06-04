import React from 'react'
import "./Navbar.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuOpen from "../../assets/menu.png"
import menuClose from "../../assets/menu -close.png"
import { useRef } from 'react';

const Navbar = () => {

   const menuRef = useRef();

    const openMenu = ()=>{
      menuRef.current.style.right="0"
    }

    const closeMenu = ()=>{
      menuRef.current.style.right="-300px"
    }
    

  return (
    <div className='navbar flex '>
      <h1
       data-aos="fade-right" 
       data-aos-duration="1000" 
       data-aos-once="true" 
       data-aos-easing="ease-in-out"
      >Rithick</h1>
      <ul 
       data-aos="fade-down" 
       data-aos-duration="1000" 
       data-aos-once="true" 
       data-aos-easing="ease-in-out"
      ref={menuRef} className='nav-list flex justify-evenly'>
        <img onClick={closeMenu} className='menu-close' src={menuClose} alt="" />
        <li><AnchorLink href='#about'><p>About Me</p></AnchorLink></li>
        <li><AnchorLink offset={50} href='#skills'><p>Skills</p></AnchorLink></li>
        <li><AnchorLink offset={50} href='#project'><p>Projects</p></AnchorLink></li>
        <li><AnchorLink offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
      </ul>
      <button
        data-aos="fade-left" 
        data-aos-duration="1000" 
        data-aos-once="true" 
        data-aos-easing="ease-in-out"
      className='btn-connect'><AnchorLink offset={50} href='#contact'>Connect With Me</AnchorLink></button>
        <img onClick={openMenu} className='menu-open' src={menuOpen} alt="" />
    </div>

  )
}

export default Navbar
