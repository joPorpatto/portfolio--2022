import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa';
import './experience.css';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IconContext } from "react-icons";
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';


import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiExpress } from 'react-icons/si';


const  frontList = [
  {
    id:1,
    name:'HTML',
    data: 'dasdjaksd',
    icon: <AiFillHtml5/>
  },
  {
    id:2,
    name:'Css',
    data: 'dasdjaksd',
    icon: <DiCss3/>
  },
  {
    id:3,
    name:'JavaScript',
    data: 'dasdjaksd',
    icon: <IoLogoJavascript/>,
  },  
  {
    id:4,
    name:'React',
    data: 'dasdjaksd',
    icon: <FaReact/>
  },  
  {
    id:5,
    name:'TypeScript',
    data: 'dasdjaksd',
    icon: <SiTypescript/>
  },  
  {
    id:6,
    name:'React Native',
    data: 'dasdjaksd',
    icon: <FaReact/>
  }
]; 
const  backList = [
  {
    id:2,
    name:'Node.JS',
    data: 'dasdjaksd',
    icon: <FaNodeJs/>
  },
  {
    id:3,
    name:'MongoDB',
    data: 'dasdjaksd',
    icon: <SiMongodb/>
  },
  {
    id:1,
    name:'MySQL',
    data: 'dasdjaksd',
    icon: <GrMysql/>,
  },
  {
    id:4,
    name:'Express',
    data: 'dasdjaksd',
    icon: <SiExpress/>,
  },    
  
]; 

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>Te comparto</h5>
      <h2>Mis skills</h2>
      <div className="container experience__container">
        <div className="experience_front">

          <h3>Frontend</h3>
          <div className="experience__content">

            {
              frontList.map(exp => {
                return (
                  <article key={exp.id} className='experience__details'>
                    <IconContext.Provider value={{ color: "#0085B7", size:40}}>
                      <div>
                          {exp.icon}
                      </div>
                    </IconContext.Provider>
                    <div>
                      <h4>{exp.name}</h4>
                    </div>
                  </article>      
                )
              })}

          </div>
        </div>



        <div className="experience_front">
          <h3>Backend</h3>
          <div className="experience__content">

             {
              backList.map(exp => {
                return (
                  <article key={exp.id} className='experience__details'>
                    <IconContext.Provider value={{ color: "#0085B7", size:40}}>
                      <div>
                          {exp.icon}
                      </div>
                    </IconContext.Provider>
                    <div>
                      <h4>{exp.name}</h4>
                    </div>
                  </article>      
                )
              })}


          </div>
        </div>

      </div>
    </section>
    
  )
}
