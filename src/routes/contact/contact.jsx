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
        <form onSubmit={enviarDatos}>
            <input type="text" placeholder="Asunto" name="asunto" onChange={handleInputChange} />
            <input type="text" placeholder="Mensaje" name="mensaje" onChange={handleInputChange} />
            <button type="submit">Enviar</button>
        </form>
    );

}