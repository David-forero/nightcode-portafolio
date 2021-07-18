import React from 'react';
import cv_David_Forero from '../docs/CV-David-Forero.doc';
import { Link } from 'react-scroll'


export const Banner = (props) => {
    return (
        <div className="row">
            <div className="col-lg-6 col-md-12 site-title wow fadeInUp">
              <h3 className="title-text">Hey</h3>
              <h1 className="title-text text-uppercase">Soy David</h1>
              <h4 className="title-text text-uppercase">
                Desarrollador Javascript Semi-senior
              </h4>
              <div className="site-buttons">
                <div className="d-flex flex-row flex-wrap">
                  <Link
                    to="contact"
                    smooth={true}
                    type="button"
                    className="btn button primary-button mr-4 text-uppercase">
                  
                    Contratarme
                  </Link>
                  <a
                    href={cv_David_Forero}
                    download=""
                    type="button"
                    className="btn button secondary-button text-uppercase"
                  >
                    Obtener cv
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 banner-image">
              <img
                src={props.banner}
                alt="banner-img"
                className="img-fluid wow fadeInUp"
              />
            </div>
          </div>
    )
}
