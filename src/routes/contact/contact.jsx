import React, { useEffect } from "react";
import useForm from '../../hooks/useForm';
import './contact.css'

export default function Contact(){

    const [data, enviarDatos, handleInputChange] = useForm();

    useEffect(() => {

        if (data) {
            const response = fetch('http://127.0.0.1:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': "*" 
                },
                body: JSON.stringify(data)
            })
            response.then(res => res.json()).then(res => console.log(res))
        }

    }, [data])

    return(
        <section className="contact-section-form">
            <div className="container container-form" style={{ width: '100%', padding: '5vh'}}>

                <h1 className="fw-bold ls-tight heading-contact"><span style={{ color: 'linear-gradient(90deg, rgb(189, 0, 196) 0%, rgb(137, 41, 255) 100%)' }}>Contactame</span></h1>

                <form onSubmit={enviarDatos}>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Asunto</label>
                        <input type="text" id="form2Example1" className="form-control" name="asunto" onChange={handleInputChange} />
                    </div>


                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Mensaje</label>
                        <textarea className="form-control" name="mensaje" id=""  onChange={handleInputChange}></textarea>
                    </div>

                    <button type="submit" className="btn btn-block mb-4" style={{backgroundImage: 'linear-gradient(90deg, rgb(189, 0, 196) 0%, rgb(137, 41, 255) 100%)', color: 'white'}}>Enviar</button>

                </form>
            </div>
        </section>
    );

}