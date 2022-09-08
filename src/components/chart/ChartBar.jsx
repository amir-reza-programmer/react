import React from "react";

import "./ChartBar.css";
const ChartBar = ({ dataPoint, value, maxValue }) => {
  const fillStyle = () => {
    console.log("values ", value, maxValue);
    let height = Math.round((value / maxValue) * 100);
    console.log("height ", height);
    if (height === undefined || isNaN(height) || height === Infinity) {
      return {
        height: `0%`,
      };
    }
    return {
      height: `${height}%`,
    };
  };
  console.log("here in chart");
  return (
    <div className="chart-bar-parent">
      <div className="chart-bar-column">
        <div className="chart-bar-fill" style={fillStyle()}></div>
      </div>
      <span>{dataPoint}</span>
    </div>
  );
};

export default ChartBar;
