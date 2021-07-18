import React from 'react';


export const Portfolio = (props) => {
    return (
        <div className="container portafolio d-flex justify-content-center flex-wrap">
          <h1 className="text-dark text-uppercase mb-5">Portafolio</h1>
          <a href="https://david-forero.github.io/website-books-bootstrap/" target="_black">
            <img
              src={props.portfolio.c2}
              alt="portafolio-nightcode"
              className="img-fluid w-100 anim mb-5"
            />
          </a>
          <img
            src={props.portfolio.c4}
            alt="portafolio-nightcode"
            className="img-fluid w-100 anim mb-5"
          />
          <img
            src={props.portfolio.c5}
            alt="portafolio-nightcode"
            className="img-fluid w-100 anim mb-5"
          />
          <a href="https://store-hacking.herokuapp.com/" target="_black">
            <img
              src={props.portfolio.c6}
              alt="portafolio-nightcode"
              className="img-fluid w-100 anim mb-5"
            />
          </a>
          <img
            src={props.portfolio.c7}
            alt="portafolio-nightcode"
            className="img-fluid w-100 anim mb-5"
          />
        </div>
    )
}
