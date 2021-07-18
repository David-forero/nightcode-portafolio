import React, { Component } from 'react';

import { Link } from 'react-scroll';

//Images
import logo from '../img/logo.png';

export default class Navigation extends Component {
    render() {
        return (     
            <header className="header_area" id="home">   
                <div className="main-menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="navbar-brand"><img src={logo} alt="logo"/></div>
                        <button className="navbar-toggler btn-response" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-align-right text-primary"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="mr-auto"></div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" smooth={true} to="home">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" smooth={true} to="about">sobre mí</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" smooth={true} to="service">Servicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" smooth={true} to="portfolio">Portafolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" smooth={true} to="contact">Contacto</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>     
        )
    }
}
