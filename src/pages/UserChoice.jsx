import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/layouts/Header";
import Navbar from "../components/layouts/Navbar";

/**
 * User choice page
 * @returns {JSX}
 */

const UserChoice = () => {
  return (
    <div className="home">
      <Header />
      <div className="main">
        <Navbar />
        <div className="user-link">
          <NavLink to="/user/12">
            <button>Karl</button>
          </NavLink>
          <NavLink to="/user/18">
            <button>Cécilia</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserChoice;
