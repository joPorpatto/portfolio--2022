import React from 'react'

import "./modal.css"
import {IoIosCloseCircle} from 'react-icons/io';
import { IconContext } from "react-icons";

  // info:{
  //     data: 'El proyecto consta en desarrollar el Frontend de una página web para Somos más.',
  //     tech: 'REDUX/TOOLKIT - ESLINT - CHAKRA UI - AXIOS - REACT ROUTER DOM - FORMIK - React Testing Library',
  //     library: 'React',
  //     AUTENTICACIÓN: 'ALKEMY', 
  //     API: 'ongapi.alkemy.org'}

export const Modal = ({setModalVisibility,image, title,info}) => {
  console.log(info)
        return (
                <div className='presentation' role="presentation">
                        <div className= 'wrapper-modal'>
                                <div className='modal'>
                                        <span 
                                                onClick={()=>setModalVisibility(false)}
                                                className='modal-close'
                                        >       
                                        <IconContext.Provider value={{  size:40}}>      
                                          <IoIosCloseCircle/>
                                        </IconContext.Provider>
                                        </span>
                                        <img 
                                                src={image} 
                                                alt={title}
                                                className='modal__poster-img'
                                        />
                                        <div className='modal__content'>
                                                <p className='modal__title'>{title}</p>
                                                <p className='modal__overview'>{info.data}</p>   
                                                <p className='modal__details'>{info.tech}</p>
   
                                                
                                        </div>

                                </div>

                        </div>
                        
                </div>
        )
}