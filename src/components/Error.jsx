import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";

const Error = () => {
  return (
    <div className="home">
      <Header />
      <div className="main-container">
        <Navbar />
        <div className="error-msg">
          <h1>
            Cette page n'existe pas.
            <br />
            <NavLink to="/">Veuillez retourner à la page d'accueil</NavLink>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Error;
