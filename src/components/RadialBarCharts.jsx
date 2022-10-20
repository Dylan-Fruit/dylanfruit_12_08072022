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
 * @param {Number} score
 * @returns {JSX}
 */

const RadialBarCharts = ({ score }) => {
  const data = [
    {
      uv: 100,
      display: "none",
    },
    {
      uv: score.todayScore * 100 || score,
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
          {score.todayScore * 100 || score}%
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
  score: propTypes.number.isRequired,
};

export default RadialBarCharts;
