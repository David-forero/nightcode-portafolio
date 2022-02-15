import React from "react";

export const Portfolio = (props) => {
  
  return (
    <section id="project">
      {/*heading-------------*/}
      <div className="project-heading">
        <h3>Mis Proyectos</h3>
      </div>
      {/*filter-------*/}
      <ul className="portfolio-filter">
        <li className="list portfolio-filter-active" data-filter="all">
          Todos
        </li>
        <li className="list" data-filter="app">
          Aplicaciones
        </li>
        <li className="list" data-filter="appdesign">
          App Design
        </li>
        <li className="list" data-filter="web">
          Website Designs
        </li>
      </ul>
      {/*container-------*/}
      <div className="portfolio-container">
        {/*1----------*/}
        <a
          href="https://ecommerce-libretas-df.netlify.app/"
          target="_black"
          className="portfolio-box web "
          data-lightbox="work"
        >
          <img alt="portafolio" src={props.portfolio.b1} />
        </a>
        {/*2----------*/}
        <a
          href="https://david-forero.github.io/website-books-bootstrap/"
          className="portfolio-box web"
          data-lightbox="work"
          target="_black"
        >
          <img alt="portafolio" src={props.portfolio.b2} />
        </a>
        {/*3----------*/}
        <a
          href="https://store-hacking.herokuapp.com/"
          className="portfolio-box app"
          data-lightbox="work"
          target="_black"
        >
          <img alt="portafolio" src={props.portfolio.b3} />
        </a>


        {/*4----------*/}
        <a
          href={props.portfolio.b4}
          className="portfolio-box app"
          data-lightbox="work"
          target="_black"
        >
          <img alt="portafolio" src={props.portfolio.b4} />
        </a>
        {/*5----------*/}
        <a
          href="https://expo.dev/@daele/home-rental-ui"
          className="portfolio-box appdesign"
          data-lightbox="work"
          target="_black"
        >
          <img alt="portafolio" src={props.portfolio.b5} />
        </a>
        {/*6----------*/}
        <a
          href="https://expo.dev/@daele/basic-travel-ui"
          className="portfolio-box appdesign"
          data-lightbox="work"
          target="_black"
        >
          <img alt="portafolio" src={props.portfolio.b6} />
        </a>

        <a
          href="https://nightcodesend.vercel.app/"
          className="portfolio-box app"
          data-lightbox="work"
          target="_black"
        >
          <img alt="portafolio" src={props.portfolio.b7} />
        </a>
      </div>
    </section>
  );
};
