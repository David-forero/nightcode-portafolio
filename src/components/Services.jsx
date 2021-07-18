import React from 'react'

export const Services = (props) => {
    return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center services-title">
              <h1 className="text-uppercase title-text anim">Mis servicios</h1>
              <p className="para anim">
                Me gusta ser perfeccionista, para ello brindaré mi mejor
                esfuerzo para hacer un producto con mayor calidad.
              </p>
            </div>
          </div>
          <div className="w-100 services-list">
            <div className="row anim d-flex justify-content-center flex-wrap">
              <div className="services">
                <div className="sevices-img text-center py-4">
                  <img src={props.services.s1} alt="Services-1" />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title text-uppercase font-roboto">
                    Desarrollo Js
                  </h5>
                  <p className="card-text text-secondary">
                    Se desarrolla toda la funcionalidad necesaria a la
                    aplicación web de manera que sea seguro el sistema.
                  </p>
                </div>
              </div>

              <div className="services">
                <div className="sevices-img text-center py-4">
                  <img src={props.services.s2} alt="Services-2" />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title text-uppercase font-roboto">
                    ux/ui desing
                  </h5>
                  <p className="card-text text-secondary">
                    Mejorár la calidad de interfáz para una buena experiencia al
                    usuario, un diseño amigable y bonito.
                  </p>
                </div>
              </div>

              <div className="services">
                <div className="sevices-img text-center py-4">
                  <img src={props.services.s3} alt="Services-3" />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title text-uppercase font-roboto">
                    responsive
                  </h5>
                  <p className="card-text text-secondary">
                    Diseño flexible y adaptado a todos los dispositivos como
                    tablets y iPhone.
                  </p>
                </div>
              </div>

              <div className="services">
                <div className="sevices-img text-center py-4">
                  <img src={props.services.s4} alt="Services-4" />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title text-uppercase font-roboto">
                    seo optimize
                  </h5>
                  <p className="card-text text-secondary">
                    Tu sitio web será encontrado rápido mediante etiquetas html
                    para los motores de búsquedas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
