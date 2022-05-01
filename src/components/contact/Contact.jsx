import React, { useRef, useState } from 'react'
import {  Field, Form, Formik } from 'formik'
import { Loading } from './Loading'
import './contact.css';
import emailjs from '@emailjs/browser';
import { RiMailSendLine } from "react-icons/ri";
import {IconContext} from "react-icons";
import Swal from 'sweetalert2'




export const Contact = () => {  
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = () => {
    emailjs.sendForm('service_wvr8l5n', 'template_0n4p1ef', form.current, 'Ry0aENPLcWIdqTRh9')
      .then((result) => {
          setLoading(false)
          Swal.fire(
            'Mensaje enviado',
            'Muchas Gracias!',
            'success'
          )

      }, (error) => {
          setLoading(false)
           Swal.fire(
            'Mensaje no enviado',
            'Intente nuevamente!',
            'error'
          )
      });
  };

  return (
    <section id='contact' >
      <h5>Aquí puedes escribirme</h5>
        <h2>Contacto</h2>
      <div className='contact'>
    <div className="center">
                        
                        <Formik
                                initialValues={{name:"",email:"", message:""}}
                                // react
                               validate={(values)=>{                                       
                                       let errores = {};
                                       if (!values.name) {
                                         errores.name = "Ingresar Nombre"
                                         
                                       }
                                       if (!values.email) {
                                               errores.email = "Ingresar correo"
                                       }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                                               errores.email = "El correo de poseer caracteres válidos"
                                       }
                                       return errores;
                               }}
                                onSubmit={
                                        (values, {resetForm}) =>{
                                              setLoading(true)
                                              sendEmail(values)   
                                                resetForm();   
                                              }
                                            }
                                            >
                                {( {values,errors,touched,handleSubmit,handleChange,handleBlur}) =>(
                                  <Form onSubmit={handleSubmit} ref={form}>  

                                                <div className="txt_field">
                                                        <Field 
                                                                type="text" 
                                                                name="name"
                                                                autoComplete="off"
                                                                value={values.name}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                />    
                                                        <span></span>
                                                        <label>Nombre</label>   
                                                                {touched.name && errors.name && <p className="error">{errors.name}</p> }                                   
                                                </div>

                                                <div className="txt_field">
                                                        <Field 
                                                                type="text" 
                                                                name="email"
                                                                autoComplete="off"
                                                                value={values.email}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                />    
                                                        <span></span>
                                                        <label>Correo</label>   
                                                                {touched.email && errors.email && <p className="error">{errors.email}</p> }                                   
                                                </div>
                                        
                                                <div className="txt_field">                                        
                                                                <Field 
                                                                        type="text" 
                                                                        name="message"
                                                                        autoComplete="off"
                                                                        value={values.message}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        />    
                                                                <span></span>
                                                                <label>Mensaje</label>                                                                                      
                                                </div>
                                                {(loading)&&<Loading/>}                                        
                                                <input 
                                                        type="submit" 
                                                        value="Enviar"
                                                        />     
                                        </Form>                                              
                                )}
                        </Formik>
                </div>  
            </div>
    </section>
  )
}
