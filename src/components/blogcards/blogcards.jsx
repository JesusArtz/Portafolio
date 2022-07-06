import React from "react";
import FotoChidaXd from '../../images/mexicodev.png';

export default function BlogCards({ name, id, element }) {

    return (
        <div className="blog-container">
            <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                    <img className="card-img-top scale-on-hover" src={FotoChidaXd} alt="Imagen no cargada" onClick={() => element(id)} />
                    <div className="card-body">
                        <h6><p onClick={() => element(id)} target="_BLANK" style={{ color: '#8929ff' }}>{name}</p></h6>
                    </div>
                </div>
            </div>
        </div>
    )

}