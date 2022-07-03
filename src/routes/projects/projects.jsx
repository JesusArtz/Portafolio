import React from "react";
import MexicoDev from '../../images/mexicodev.png';
import './projects.css';

export default function Projects() {


    return (
        <section className="projects-area">
            <div className="container">
                <div className="heading-projects">
                    <h2>TRABAJOS RECIENTES</h2>
                </div>
                <div className="row">

                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK"><img className="card-img-top scale-on-hover" src={MexicoDev} alt="Imagen no cargada"></img></a>
                            <div className="card-body">
                                <h6><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK" style={{ color: '#8929ff' }}>DomiTech</a></h6>
                                <p className="text-muted card-text">DomiTech es una plataforma de ahorros desarrollada con flask y con react.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK"><img className="card-img-top scale-on-hover" src={MexicoDev} alt="Imagen no cargada"></img></a>
                            <div className="card-body">
                                <h6><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK" style={{ color: '#8929ff' }}>DomiTech</a></h6>
                                <p className="text-muted card-text">DomiTech es una plataforma de ahorros desarrollada con flask y con react.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0"><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK"><img className="card-img-top scale-on-hover" src={MexicoDev} alt="Imagen no cargada"></img></a>
                            <div className="card-body">
                                <h6><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK" style={{ color: '#8929ff' }}>DomiTech</a></h6>
                                <p className="text-muted card-text">DomiTech es una plataforma de ahorros desarrollada con flask y con react.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );

}