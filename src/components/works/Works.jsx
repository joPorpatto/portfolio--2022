import React, { useState } from 'react'
import './portfolio.css';
import IMG1 from './assets/img1.png'
import IMG2 from './assets/img2.png';
import IMG3 from './assets/img3.png';
import IMG4 from './assets/img4.png';
import IMG5 from './assets/img5.png';
import IMG6 from './assets/front.png';

import { Modal } from './Modal';



const worksList = [
  {
    id:1,
    image:IMG1,
    title:'Cartas de héroes',
    github:'https://github.com/joPorpatto/CardsHeroes',
    link:'https://joporpatto.github.io/CardsHeroes/',
      info:{
      data: 'Tarjetas de superhéroes con restricciones de equipos. También se muestran contenidos de poderes y atributos de cada uno.',
      tech: 'Redux, Thunk, Hooks, React Router',
      library: 'React',
      AUTENTICACIÓN: 'Firebase', 
      API: 'superheroapi'}
  },
  {
    id:2,
    image:IMG2,
    title:'NETFLIX CLONE',
    github:'https://github.com/joPorpatto/netflix-clone',
    link:'https://joporpatto.github.io/netflix-clone/',
    info:{
      data: 'Web creada a partír de la estructura de la página oficial de Netflix',
      tech: 'Redux, Thunk, Hooks, React Router, Axios.',
      library: 'React',
      AUTENTICACIÓN: 'Firebase', 
      API: 'themoviedb'}
  },
  {
    id:3,
    image:IMG3,
    title:'ONG Somos Más',
    github:'https://github.com/joPorpatto/SomosMasPage',
    link:'https://github.com/joPorpatto/SomosMasPage',
    info:{
      data: 'El proyecto consta en desarrollar el Frontend de una página web para Somos más.',
      tech: 'REDUX/TOOLKIT - ESLINT - CHAKRA UI - AXIOS - REACT ROUTER DOM - FORMIK - React Testing Library',
      library: 'React',
      AUTENTICACIÓN: 'ALKEMY', 
      API: 'ongapi.alkemy.org'}
  },
  {
    id:4,
    image:IMG4,
    title:'Portfolio 2021',
    github:'https://github.com/joPorpatto/portfolio',
    link:'https://joporpatto.github.io/Portfolio',
    info:{
      data: 'Primer Portfolio.',
      tech: 'HTML, CSS, JavaScript'
    }
  },
  {
    id:5,
    image:IMG5,
    title:'Portfolio 2021',
    github:'https://github.com/joPorpatto/portfolio',
    link:'https://joporpatto.github.io/Portfolio',
    info:{
      data: 'Primer Portfolio.',
      tech: 'HTML, CSS, JavaScript'
    }
      },
      {
    id:6,
    image:IMG6,
    title:'Portfolio 2021',
    github:'https://github.com/joPorpatto/portfolio',
    link:'https://frontend-t8a.herokuapp.com/',
    info:{
      data: 'Primer Portfolio.',
      tech: 'HTML, CSS, JavaScript'
    }
      }
];

export const Works = () => {

  const [modalVisibility, setModalVisibility] = useState(false);
  const [workSelected, setWorkSelected] = useState({});
  const handleClickImage = (work,image) =>{
    setModalVisibility(true)
    setWorkSelected(work);
  }
  return (
    <section id='work' className='section__work'>
        <h5>Mis recientes trabajos</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {
            worksList.map(work =>{
              return(
                 <article key={work.id} className='portfolio__item'>
                    <div className="portfolio__item-image front " >
                      <img
                        src={work.image} 
                        alt="portfolio" 
                        onClick={()=>handleClickImage(work,work.image)}
                       />
                    </div>
                    <div className='title'>
                      <h3>{work.title}</h3>
                    </div>

                    <div className="data">
                      <div className="portfolio__item-cta">
                        <a href={work.github} className='btn' target={'_blank'}>Github</a>
                        <a href={work.link} className='btn btn-primary' target={'_blank'}>Ver</a>
                      </div>
                    </div>
                   </article> 
             )
            })
          }          
        </div>
        {
          (modalVisibility)&& <Modal {...workSelected} setModalVisibility={setModalVisibility}  />
        }
    </section>
  )
}
