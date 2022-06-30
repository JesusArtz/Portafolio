import React from "react";
import JesusFoto from '../../images/jesu.png'
import './cv.css'
import Experience from "../../components/experience/experience";

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
                <div className="cv-experience-container">
                    <div className="cv-experience-tittle">
                        <span>Experiencia de Trabajo</span>
                    </div>
                    <div className="cv-experience-cards-container">

                        <Experience>
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content">
                                        <h3>
                                            <a href="https://mexicodev.org/" target="_blank">MexicoDev</a>
                                        </h3>
                                        <p>This is where I network and build my professional protfolio.</p>
                                    </div>
                                </div>
                            </div>
                        </Experience>

                        <Experience>
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content">
                                        <h3>
                                            <a href="https://mexicodev.org/" target="_blank">MexicoDev</a>
                                        </h3>
                                        <p>This is where I network and build my professional protfolio.</p>
                                    </div>
                                </div>
                            </div>
                        </Experience>

                        <Experience>
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content">
                                        <h3>
                                            <a href="https://mexicodev.org/" target="_blank">MexicoDev</a>
                                        </h3>
                                        <p>This is where I network and build my professional protfolio.</p>
                                    </div>
                                </div>
                            </div>
                        </Experience>
                        
                    </div>
                </div>
            </section>
        </>
    );

}