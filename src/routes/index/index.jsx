import React from "react";
import './index.css';
import JesusFoto from '../../images/jesu.png'
import SkillCard from "../../components/skillCards/skillCard";


export default function Index() {

    return (
        <>
            <section className="index-section-presentation">
                <div className="index-presentation-container">
                    <div className="index-presentation-avatar">
                        <img src={JesusFoto} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                    </div>
                    <div className="index-presentation-text">
                        <p>Hola, Soy Jesús, tengo experiencia en el desarrollo FullStack</p>
                        <a className="index-presentation-link" href="/contact">Contactame</a>
                    </div>
                </div>
            </section>
            <section className="index-section-skills">
                <div className="index-skills-container">
                    <div className="index-skills-tittle"><span>Mis Habilidades</span></div>
                    <div className="index-skills-cards">

                        <SkillCard>
                            <div className="property-card">
                                <a href="#">
                                    <div className="property-image" style={{backgroundImage: `url(${JesusFoto})`}}>
                                        <div className="property-image-title">
                                           
                                        </div>
                                    </div></a>
                                <div className="property-description">
                                    <h5> Python Skills </h5>
                                    <p>Hola, sise python.</p>
                                </div>
                            </div>
                        </SkillCard>

                        <SkillCard>
                            <div className="property-card">
                                <a href="#">
                                    <div className="property-image" style={{backgroundImage: `url(${JesusFoto})`}}>
                                        <div className="property-image-title">
                                           
                                        </div>
                                    </div></a>
                                <div className="property-description">
                                    <h5> JavaScript Skills </h5>
                                    <p>Hola, nose JavaScript</p>
                                </div>
                            </div>
                        </SkillCard>


                    </div>
                </div>
            </section>
        </>
    );

}
