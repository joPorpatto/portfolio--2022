import React, { useState } from 'react'
import { FaHome, FaTools } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import './nav.css';

export const Nav = () => {
 const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav=== '#' ? 'active':''}> <FaHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav=== '#about' ? 'active':''}> <FaInfoCircle/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav=== '#experience' ? 'active':''}> <FaTools/></a>
      <a href="#work" onClick={()=> setActiveNav('#work')} className={activeNav=== '#work' ? 'active':''}> <FaBook/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active':''}> <FaEnvelope/></a>


    </nav>
  )
}
