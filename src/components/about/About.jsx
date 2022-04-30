import React from 'react'
import './about.css';

import ME from '../../assets/favi.svg'
import 'animate.css';


export const About = () => {
  return (
    <section id='about'>
        <h5>Te cuento</h5>
        <h2>Sobre mi</h2>

        <div className='container about__container'>
          
          <div className="about__me animate__animated animate__tada">
            <div className='about__me-image  '>
              <img src={ME} alt='About Image'/>
            </div>
          </div>
          
          <div className="about__content">      
              <p>
                Como estudiante universitario informático
me encanta escribir código, en especial
JavaScript. Actualmente soy Desarrollador
Junior en React.js para Frontend y en
Node.js para Backend.
              </p>
          </div>
        
        </div>

    </section>
  )
}
