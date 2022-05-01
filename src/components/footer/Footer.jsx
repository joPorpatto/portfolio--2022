import React, { useEffect, useState } from 'react'
import './footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {

  
  return (
    <footer>        
          <a href='#' className='footer__logo'>WEB</a>

          <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>

          <div className="footer__socials">
            <a href='https://github.com/joPorpatto' rel="noreferrer" target={'_blank'}><FaGithub/></a>
            <a href='https://www.linkedin.com/in/joelporpatto/' rel="noreferrer" target={'_blank'}><FaLinkedin/></a>
          </div>

      <div className="footer__copy">
        <small>&copy; WEB asdasdas</small>
      </div>  
        
      
    </footer>
  )
}
