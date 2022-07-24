import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Legend,
} from "recharts";
import propTypes from "prop-types";

const LineCharts = ({ userSessions }) => {
  const days = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  const DaysChange = (item) => days[item];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="line-chart-tooltip">
          <p className="line-chart-tooltip-label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = () => {
    return (
      <div>
        <h2 className="line-chart-title">Durée moyenne des sessions</h2>
      </div>
    );
  };

  return (
    <div className="line-chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={userSessions.sessions}
          margin={{ top: 0, bottom: 12, left: 0, right: 0 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickFormatter={DaysChange}
            tick={{ fill: "#FFFFFF" }}
            tickLine={false}
            tickMargin={0}
            fontSize={12}
            opacity={0.5}
            padding={{ left: 14, right: 12.5 }}
          />
          <YAxis hide={true} domain={[0, 130]} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Legend verticalAlign="top" align="left" content={<CustomLegend />} />
          <Line
            activeDot={{
              fill: "#ffffff",
              r: 3.5,
              strokeWidth: 8,
              strokeOpacity: "0.3",
              fillOpacity: "1",
            }}
            strokeWidth={2}
            type="monotone"
            dataKey="sessionLength"
            stroke={"#ffffff"}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

LineCharts.propTypes = {
  userSessions: propTypes.object.isRequired,
  active: propTypes.bool,
  payload: propTypes.array,
};

export default LineCharts;
