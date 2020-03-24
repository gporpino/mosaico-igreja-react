import React from "react";
import Iconbox from "../../components/iconbox";

import "../../scss/global.scss";
import "./Home.scss";
import logo from "../../logo.png";

const Home = () => (
  <div className="Home">
    <nav className="nav">
      <div className="container">
        <img src={logo} alt="Mosaico Igreja" className="logo" />
      </div>
    </nav>
    <header className="slider">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-8 col-xs-12 slider__column">
            <h1 className="slider__h1">
              Conhecer a Deus
              <br />
              Amar ao próximo
              <br />&<br />
              Servir à cidade
            </h1>
          </div>
          <div className="col-md-4 col-xs-12 slider__column">
            <h2 className="slider__h2">Bem-vinda à Mosaico.</h2>
          </div>
        </div>
      </div>
    </header>
    <section id="sobre">
      <div className="container">
        <div className="row">
          <div className="col" />
        </div>
        <div className="row">
          <div className="col-md-8 col-lg-5 content">
            <p>
              A Mosaico existe para catalisar a restauração da cidade através do
              movimento do Evangelho. A nossa missão é revelar o propósito de
              Deus - a esperança do evangelho - através de Cristo: o de
              reconciliar consigo mesmo todas as coisas e fazer convergir em
              Cristo tudo que existe.
            </p>
            <p>
              Vivemos isso baseados num tripé tão simples quanto poderoso:
              Conhecer a Deus, Amar às pessoas e Servir à Cidade.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="conheca">
      <div className="container">
        <div className="row">
          div className="col-md-4">
          <Iconbox
            link="/issoae"
            type="conhecaigreja"
            icon="https://via.placeholder.com/48x48"
            title="Quero conhecer a igreja"
            desc="Tudo o que você precisa saber sobre nós (e mais um pouco)"
          />
        </div>
        <div className="col-md-4">
          <Iconbox
            link="/issoae"
            type="conhecajesus"
            icon="https://via.placeholder.com/48x48"
            title="Quero conhecer Jesus"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sunt?"
          />
        </div>
        <div className="col-md-4">
          <Iconbox
            link="/issoae"
            type="facaparte"
            icon="https://via.placeholder.com/48x48"
            title="Quero fazer parte"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sunt?"
          />
        </div>
      </div>
    </section>
    <section id="pg">pg</section>
  </div>
);

export default Home;
