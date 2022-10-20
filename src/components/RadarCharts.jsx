import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import propTypes from "prop-types";

/**
 * RadarCharts component
 * @param {Object} userPerformance
 * @returns {JSX}
 */

const RadarCharts = ({ performance }) => {
  return (
    <div className="radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={90}
          data={performance}
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
  performance: propTypes.array.isRequired,
};

export default RadarCharts;
