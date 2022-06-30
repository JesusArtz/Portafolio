import React from "react";
import JesusFoto from '../../images/jesu.png'
import './cv.css'

export default function CV() {

    return (
        <>
            <section className="cv-section-presentation">
                <div className="cv-presentation-container">
                    <div className="cv-presentation-avatar">
                        <img src={JesusFoto} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                    </div>
                    <div className="cv-presentation-text">
                        <p>Hola, Soy Jesús, tengo experiencia en el desarrollo FullStack</p>
                        <a className="cv-presentation-link" href="/contact">Contactame</a>
                    </div>
                </div>
            </section>
            <section className="cv-section-experience">

            </section>
        </>
    );

}