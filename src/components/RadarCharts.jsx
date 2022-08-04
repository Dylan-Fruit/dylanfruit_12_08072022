import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import propTypes from "prop-types";
import Loader from "./Loader";

/**
 * RadarCharts component
 * @param {Object} userPerformance
 * @returns {JSX}
 */

const RadarCharts = ({ userPerformance }) => {
  /**
   * Translate elements in french
   * @param {string} kind
   * @returns string
   */

  const trad = (kind) => {
    switch (kind) {
      case "cardio":
        return "Cardio";
      case "endurance":
        return "Endurance";
      case "energy":
        return "Energie";
      case "strength":
        return "Force";
      case "speed":
        return "Vitesse";
      case "intensity":
        return "Intensité";
      default:
        return kind;
    }
  };

  /**
   * Search in the data the element kind to apply the traduction fonction on the elements
   * @param {string} element
   * @returns string
   */

  const data = userPerformance.data.map((element) => ({
    ...element,
    kind: trad(userPerformance.kind[element.kind]),
  }));

  if (userPerformance.data.length === 0) {
    return <Loader />;
  }

  return (
    <div className="radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={90}
          data={data}
          startAngle={210}
          endAngle={210 + 360}
        >
          <PolarGrid
            radialLines={false}
            polarRadius={[11.12, 22.25, 45, 67.5, 90]}
            stroke="#ffffff"
          />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#ffffff"
            tickLine={false}
            fontSize={12}
          />
          <Radar
            dataKey="value"
            stroke="#ff0000"
            fill="#ff0000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadarCharts.propTypes = {
  userPerformance: propTypes.object.isRequired,
};

export default RadarCharts;
