import React from "react";
import yogaicon from "../../assets/yogaicon.svg";
import swimicon from "../../assets/swimicon.svg";
import cyclingicon from "../../assets/cyclingicon.svg";
import musculationicon from "../../assets/musculationicon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-icons">
        <img src={yogaicon} alt="yoga icon" />
        <img src={swimicon} alt="swim icon" />
        <img src={cyclingicon} alt="cycling icon" />
        <img src={musculationicon} alt="musculation icon" />
      </div>
      <div className="navbar-copyright">
        <p>Copyright, Sportsee 2022</p>
      </div>
    </div>
  );
};

export default Navbar;
