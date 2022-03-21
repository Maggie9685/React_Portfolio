import React from 'react';
import About from './About';
import Project from './Project';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="main-title">Let's coding!</h1>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require(`../../assets/img1.jpg`)} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <a href="#porfolio" class="nav-link" >
              <h1>My Works</h1>
            </a>
              <p>Some of my favoriate projects.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require(`../../assets/img2.jpg`)} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <a href="#aboutMe" class="nav-link" >
              <h1>Little About Me</h1>
            </a>
              <p>A cat mom currently work from home.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require(`../../assets/img3.jpg`)} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <a href="#contact" class="nav-link" >
              <h1>Get In Touch</h1>
            </a>
              <p>Open to any remote position.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <p></p>
      <div id="porfolio"><Project /></div>

      <div id="aboutMe"><About /></div>
      <p></p>
      <div id="contact"><Contact /></div>
    </div>
  );
}
