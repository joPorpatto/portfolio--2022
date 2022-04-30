import React, { useEffect, useState } from 'react'
import { Cta } from './Cta'
import ME from '../../assets/perfi.png'

import { HeaderSocials } from './HeaderSocials'
import './header.css';
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import 'animate.css';


const Header = () => {

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > 600) { // if scroll down hide the navbar
        setShow(true); 
      } else { // if scroll up show the navbar
        setShow(false);  
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header>
      <div className="container header__container">
        <h5>Hola, soy </h5>
        <h1>Joel Porpatto</h1>
        <h5 className='text-light'>Desarrollador Frontend </h5>
        <Cta/>
        <HeaderSocials/>
        <div className="me">
            <img src={ME} alt='me' />
        </div>
        <a href='#contact' className='scroll__down'>IR ABAJO</a>
      {
          (show) &&
                <IconContext.Provider value={{ size:40}}>
                      <div>
                        <a href='#' className='scroll__up'>
                          <IoIosArrowDropupCircle/>
                        </a>
                          
                      </div>
                    </IconContext.Provider>
        }
      
      </div>
    </header>
  )
}

export default Header