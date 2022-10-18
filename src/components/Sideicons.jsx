import React from "react";
import calorieicon from "../assets/calorieicon.svg";
import glucideicon from "../assets/glucideicon.svg";
import proteinicon from "../assets/proteinicon.svg";
import lipideicon from "../assets/lipideicon.svg";
import propTypes from "prop-types";

/**
 * Side icons components
 * @param {string} type
 * @param {number} value
 * @returns {JSX}
 */

const Sideicons = ({ type, value }) => {
  let statsIcons = {
    Calories: calorieicon,
    Proteines: proteinicon,
    Glucides: glucideicon,
    Lipides: lipideicon,
  };

  const icon = (item) => statsIcons[item];
  let renderedIcon = icon(type);
  let unit = type === "Calories" ? "kCal" : "g";

  return (
    <div className="side-icon">
      <div className="side-icon-img">
        <img src={renderedIcon} alt={type} />
      </div>
      <div className="side-icon-text">
        <h2 className="side-icon-unit">
          {value}
          {unit}
        </h2>
        <p className="side-icon-title">{type}</p>
      </div>
    </div>
  );
};

Sideicons.propTypes = {
  type: propTypes.string.isRequired,
  value: propTypes.number.isRequired,
};

export default Sideicons;
