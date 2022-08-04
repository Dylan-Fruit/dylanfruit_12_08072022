import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

/**
 * Header component layout
 * @returns {JSX}
 */

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={logo} alt="logo sportsee" />
      </NavLink>
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
