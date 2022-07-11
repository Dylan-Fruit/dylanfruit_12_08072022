import React from "react";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo sportsee" />
      <ul>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
};

export default Header;
