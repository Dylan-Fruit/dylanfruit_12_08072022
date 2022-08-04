import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import propTypes from "prop-types";

/**
 * CustomTooltip with kg & kCal values
 * @param {Boolean} active
 * @param {Array} payload
 * @returns {JSX}
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bar-chart-tooltip">
        <span>{payload[0].value}kg</span>
        <span>{payload[1].value}kCal</span>
      </div>
    );
  }
  return null;
};

/**
 * BarCharts component
 * @param {Object} userActivity
 * @returns {JSX}
 */

const BarCharts = ({ userActivity }) => {
  const formatDay = (item) => new Date(item).getDate();

  return (
    <div className="bar-chart">
      <p className="bar-chart-activity">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={userActivity.sessions}
          margin={{ top: 24, bottom: 23, left: 32, right: 0 }}
          barGap={8}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickFormatter={formatDay}
            tickMargin={16}
          />
          <YAxis
            yAxisId="kilogram"
            domain={["dataMin-1", "dataMax+2"]}
            tickCount={3}
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickMargin={5}
          />
          <YAxis
            yAxisId="calories"
            orientation="right"
            axisLine={false}
            tickLine={false}
            hide
            domain={["dataMin-100", "dataMax+100"]}
            tickCount={3}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "#C4C4C4", width: 56, transform: "translate(28)" }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType={"circle"}
            iconSize={8}
            formatter={(value) =>
              value === "kilogram" ? (
                <span className="bar-chart-weight">Poids (kg)</span>
              ) : (
                <span className="bar-chart-calories">
                  Calories brûlées (kCal)
                </span>
              )
            }
            height={100}
          />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282d30"
            barSize={7}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill=" #e60000"
            barSize={7}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;

BarCharts.propTypes = {
  userActivity: propTypes.object.isRequired,
  active: propTypes.bool,
  payload: propTypes.array,
};
