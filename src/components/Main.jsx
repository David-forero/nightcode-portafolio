import React from "react";

//components
import { Banner } from './Banner';
import { About } from './About';
import { Services } from './Services';
import { Portfolio } from './Portfolio'

//Images
import banner from '../img/banner/banner-image.png';
import about from '../img/about-us.png';
import s1 from '../img/services/s1.png';
import s2 from '../img/services/s2.png';
import s3 from '../img/services/s3.png';
import s4 from '../img/services/s4.png';

import c2 from '../img/portfolio/c2.jpg';
import c4 from '../img/portfolio/c4.jpg';
import c5 from '../img/portfolio/c5.jpg';
import c6 from '../img/portfolio/c6.jpg';
import c7 from '../img/portfolio/c7.jpg';

const services = {s1, s2, s3, s4};
const portfolio = {c2, c4, c5, c6, c7}

export const Main = () => {
  return (
    <div className="site-main">
      <div className="site-banner">
        <div className="container">
          <Banner banner={banner} />
        </div>
      </div>

      <div className="about-area" id="about">
        <About about={about} />
      </div>

      <div className="brand-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 wow fadeInUp">
              <div className="first-row row">
                
                <div className="habilidades">
                  <h1>Habilidades</h1>

                  <li>
                    <h3>HTML 5 / CSS 3</h3>
                    <span className="barra">
                      <span className="html"></span>
                    </span>
                  </li>

                  <li>
                    <h3>React</h3>
                    <span className="barra">
                      <span className="react"></span>
                    </span>
                  </li>

                  <li>
                    <h3>React Native</h3>
                    <span className="barra">
                      <span className="rn"></span>
                    </span>
                  </li>

                  <li>
                    <h3>Electron.js</h3>
                    <span className="barra">
                      <span className="electron"></span>
                    </span>
                  </li>

                  <li>
                    <h3>Node.js</h3>
                    <span className="barra">
                      <span className="node"></span>
                    </span>
                  </li>

                  <li>
                    <h3>Mongodb</h3>
                    <span className="barra">
                      <span className="mongo"></span>
                    </span>
                  </li>

                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 wow fadeInUp">
              <div className="experience-area">
                <div className="d-flex flex-row years-area">
                  <h2 className="p-3 years">2</h2>
                  <h2>
                    <span>Años</span>
                    <span>De Experiencia</span>
                    <span>Trabajando</span>
                  </h2>
                </div>
                <div className="d-flex flex-row flex-wrap call-area">
                  <span>
                    <i className="fas fa-phone-alt fa-3x px-3"></i>
                  </span>
                  <div className="call-now">
                    <a href="/" className="text-uppercase h4 font-roboto">
                      Escríbeme
                    </a>
                    <span className="font-roboto py-2">(+58) 412-801-9009</span>
                  </div>
                </div>
                <div className="bg-panel"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area" id="service">
          <Services services={services} />
      </div>

      <div className="project-area" id="portfolio">
          <Portfolio portfolio={portfolio} />
      </div>

      {/* <div className="subscribe-us-area" id="contact">
        <div className="container subscribe">
          <div className="col">
            <div className="col-lg-12 text-center subscribe-title">
              <h4 className="text-uppercase wow fadeInUp">Formulario de Contacto</h4>
              <p className="para wow fadeInUp">
                Si tiene alguna pregunta o le interesa mi servicio, no dude en
                enviarme un mensaje por correo. ¡Manos a la obra!
              </p>
            </div>
          </div>
          <div className="d-sm-flex justify-content-center">
            <form className="sos p-4 wow fadeInUp">
              <div className="form-group input-textbox">
                <input
                  type="text"
                  name="email"
                  required
                  id="inputCorreo"
                  className="form-control"
                  placeholder="Correo"
                />
              </div>

              <div className="form-group input-textbox">
                <input
                  type="text"
                  name="name"
                  required
                  id="inputNombre"
                  className="form-control mt-5"
                  placeholder="Nombre y Apellido"
                />
              </div>

              <div className="form-group input-textbox">
                <input
                  type="text"
                  name="phone"
                  required
                  id="inputTelefono"
                  className="form-control mt-5"
                  placeholder="Numero de Teléfono"
                />
              </div>

              <div className="form-group input-textbox mt-5">
                <textarea
                  name="sms"
                  required
                  id="inputMensa"
                  rows="10"
                  placeholder="Escriba un mensaje"
                  className="mensaje form-control"
                ></textarea>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-success">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      
    </div>
  );
};
