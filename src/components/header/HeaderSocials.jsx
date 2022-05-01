/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";



export const HeaderSocials = () => {
  return (
    <div className='header__socials'>

      <IconContext.Provider value={{  size:30}}>
        <a href='https://www.linkedin.com/in/joelporpatto/' target='_blank'><FaLinkedin/></a>
        <a href='https://github.com/joPorpatto' target='_black'><FaGithub/></a>      
                     
      </IconContext.Provider>
      
    </div>
  )
}
