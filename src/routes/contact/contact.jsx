import React, { useEffect } from "react";
import useForm from '../../hooks/useForm'

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
        <section className="cv-section-contact">
            <div className="cv-contact-container">
                <form onSubmit={enviarDatos}>

                    <div className="cv-contact-input">
                        <input type="text" name="asunto" id="asunto" placeholder="asunto" onChange={handleInputChange} />
                        <label htmlFor="asunto">Asunto</label>
                    </div>

                    <div className="cv-contact-input">
                        <input type="text" name="mensaje" id="mensaje" placeholder="Mensaje" onChange={handleInputChange} />
                        <label htmlFor="mensaje">Mensaje</label>
                    </div>

                    <button type="submit">Enviar</button>

                </form>
            </div>
        </section>
    );

}