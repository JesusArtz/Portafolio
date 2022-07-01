import React from "react";
import MexicoDev from '../../images/mexicodev.png'

export default function Projects() {

    return (
        <>
            <main class="page projects-page">
                <section class="portfolio-block projects-cards">
                    <div class="container">
                        <div class="heading">
                            <h2>TRABAJOS RECIENTES</h2>
                        </div>
                        <div class="row">

                            <div class="col-md-6 col-lg-4">
                                <div class="card border-0"><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK"><img class="card-img-top scale-on-hover" src={MexicoDev} alt="Imagen no cargada"></img></a>
                                    <div class="card-body">
                                        <h6><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK">DomiTech</a></h6>
                                        <p class="text-muted card-text">DomiTech es una plataforma de ahorros desarrollada con flask y con react.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                                <div class="card border-0"><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK"><img class="card-img-top scale-on-hover" src={MexicoDev} alt="Imagen no cargada"></img></a>
                                    <div class="card-body">
                                        <h6><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK">DomiTech</a></h6>
                                        <p class="text-muted card-text">DomiTech es una plataforma de ahorros desarrollada con flask y con react.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                                <div class="card border-0"><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK"><img class="card-img-top scale-on-hover" src={MexicoDev} alt="Imagen no cargada"></img></a>
                                    <div class="card-body">
                                        <h6><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK">DomiTech</a></h6>
                                        <p class="text-muted card-text">DomiTech es una plataforma de ahorros desarrollada con flask y con react.</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </main>
        </>
    );

}