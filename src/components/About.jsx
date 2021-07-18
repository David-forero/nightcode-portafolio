import React from 'react';

import cv_David_Forero from '../docs/CV-David-Forero.doc';

export const About = (props) => {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src={props.about}
                  alt="About us"
                  className="img-fluid anim"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 about-title anim">
              <h2 className="text-uppercase pt-5">
                <span>Una breve</span>
                <span>Introducción</span>
                <span>sobre mí</span>
              </h2>
              <div className="paragraph py-4 w-75">
                <p className="para">
                  Me dedico a desarrollar aplicaciones web desde los 18 años con
                  la finalidad de mejorar y ayudar a las personas con sus
                  negocios, Usando Javascript puedo crear desde sitios webs
                  hasta aplicaciones de escritorio.
                </p>

                <p className="para">
                  Todo usando Node.js y Electron.js, acompañado con estilos y
                  diseños profesionales usando bootstrap para una buena
                  comodidad en la vista para el usuario.
                </p>
              </div>
              <a
                href={cv_David_Forero}
                download=""
                type="button"
                className="btn button primary-button text-uppercase"
              >
                Download cv
              </a>
            </div>
          </div>
        </div>
    )
}
