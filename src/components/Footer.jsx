import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/logo.png';

export const Footer = () => {
    return (
        <footer className="footer-area" id="contact">
        <div className="container">
            <div className="">
                <div className="site-logo text-center py-4 wow fadeInUp">
                    <a href="/"><img src={logo} alt="logo" /></a>
                    <p className="text-dark mt-3">david.forero1813@gmail.com</p>
                </div>
                <div className="social text-center wow fadeInUp">
                    <h5 className="text-uppercase">Sígueme</h5>
                    <a className="icons" href="https://www.linkedin.com/in/david-forero-diaz-1bb911190/" target="_black"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/daele90/" target="_black" className="icons"><i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/David-forero" className="icons" target="_black"><i className="fab fa-github"></i></a>
                </div>
                <div className="copyrights text-center">
                    <p className="para wow fadeInUp">
                        Copyright © 2020 Todos los derechos reservados por 
                        <Link to="#"><span className="color-primary ml-1">NightCode</span></Link>
                    </p>
                </div>
            </div>
        </div>
    </footer>
    )
}
