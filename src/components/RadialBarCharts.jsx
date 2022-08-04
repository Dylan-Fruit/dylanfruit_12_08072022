import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from "recharts";
import propTypes from "prop-types";

/**
 * RadialBarCharts component
 * @param {Object} userData
 * @returns {JSX}
 */

const RadialBarCharts = ({ userData }) => {
  const data = [
    {
      uv: 100,
      display: "none",
    },
    {
      uv: userData.todayScore * 100 || userData.score * 100,
      fill: "#ff0000",
    },
  ];

  /**
   * Customlegend with percentage of the objectives
   * @returns {JSX}
   */
  const CustomLegend = () => {
    return (
      <div className="radial-bar-chart-legend">
        <span className="radial-bar-chart-legend-value">
          {userData.todayScore * 100 || userData.score * 100}%
        </span>
        <span className="radial-bar-chart-legend-text">de votre objectif</span>
      </div>
    );
  };

  return (
    <div className="radial-bar-chart">
      <p className="radial-bar-chart-score">Score</p>
      <div className="radial-bar-chart-circle">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            barSize={10}
            data={data}
            startAngle={210}
            endAngle={-150}
            innerRadius="0%"
            outerRadius="202%"
          >
            <RadialBar
              minAngle={15}
              background={{ fill: "#fbfbfb" }}
              clockWise
              dataKey="uv"
              cornerRadius={5}
            />
            <Legend verticalAlign="middle" content={<CustomLegend />} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

RadialBarCharts.propTypes = {
  userData: propTypes.object.isRequired,
};

export default RadialBarCharts;
