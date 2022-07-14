import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/layouts/Header";
import Navbar from "../components/layouts/Navbar";

const UserChoice = () => {
  return (
    <div className="user-choice">
      <Header />
      <div className="main-container">
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
