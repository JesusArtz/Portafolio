import React from "react";
import './blog.css';
import FotoChidaXd from '../../images/mexicodev.png';
import BlogPage from "../../components/blogpage/blogpage";

export default function Blog() {
    return (
        <section className="blog-section-blog">
            {/* <div className="blog-container">
                <div className="col-md-6 col-lg-4">
                    <div className="card border-0"><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK"><img className="card-img-top scale-on-hover" src={FotoChidaXd} alt="Imagen no cargada"></img></a>
                        <div className="card-body">
                            <h6><a href="https://github.com/JesusArtz/AppNotifications" target="_BLANK" style={{ color: '#8929ff' }}>DomiTech</a></h6>
                            <p className="text-muted card-text">DomiTech es una plataforma de ahorros desarrollada con flask y con react.</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <BlogPage />

        </section>
    );
};