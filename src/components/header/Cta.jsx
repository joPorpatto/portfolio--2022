import React from 'react'
import CV from '../../assets/cv.pdf'

export const Cta = () => {
  return (
    <div className='cta'>
      <a href={CV} target="_blank"
          rel="noopener" className='btn'>Descargar CV</a>
      <a href='#contact' className='btn btn-primary'>¡Escribime!</a>
    </div>
 
    )
}
