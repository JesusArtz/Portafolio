import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {

    const routes = {
        Index: '/',
        Projects: '/projects',
        CV: '/cv',
        Contact: '/contact'
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light gradient-navbar">
            <Link className="navbar-brand paddxd" to="/">
                <img className="image-navbar-brand d-inline-block align-center" src={`${process.env.PUBLIC_URL}coins-solid.svg`} alt="" />
                <span className="ruta-principal">Jesus Dev</span>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        Object.keys(routes).map(route => {
                            return (
                                <li className="nav-item" key={route}>
                                    <Link className="nav-link" to={routes[route]}>
                                        <span className="color-rutas">{route}</span>
                                    </Link>
                                </li>
                            )
                        }, this)}
                </ul>
            </div>
        </nav>
    );
};