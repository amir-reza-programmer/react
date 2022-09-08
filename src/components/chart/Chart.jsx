import React, { useState, useEffect } from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = ({ subsetList }) => {
  const [monthData, setMonthData] = useState({
    maxValue: 0,
    Jan: 0,
    Mar: 0,
    May: 0,
    Jul: 0,
    Sep: 0,
    Nov: 0,
    Feb: 0,
    Apr: 0,
    Jun: 0,
    Aug: 0,
    Oct: 0,
    Dec: 0,
  });

  useEffect(() => {
    const objects = {};
    let maxValue = 0;
    for (let x = 0; x < subsetList.length; x++) {
      let theDate = subsetList[x].date.toDateString().split(" ")[1];
      if (objects[theDate] === undefined) {
        objects[theDate] = 1;
      } else {
        objects[theDate] += 1;
      }
      maxValue += 1;
      console.log(objects);
    }
    setMonthData((prevData) => {
      let copy = {
        maxValue: 0,
        Jan: 0,
        Mar: 0,
        May: 0,
        Jul: 0,
        Sep: 0,
        Nov: 0,
        Feb: 0,
        Apr: 0,
        Jun: 0,
        Aug: 0,
        Oct: 0,
        Dec: 0,
      };
      copy.maxValue = maxValue;
      return { ...copy, ...objects };
    });
  }, [subsetList]);

  return (
    <div className="chart-parent">
      {Object.keys(monthData).map((dataPoint, index) => {
        console.log("data ", dataPoint);
        console.log("value ", monthData[dataPoint]);
        if (index !== 0) {
          console.log(index);
          return (
            <ChartBar
              dataPoint={dataPoint}
              value={monthData[dataPoint]}
              maxValue={monthData.maxValue}
            />
          );
        }
      })}
    </div>
  );
};

export default Chart;
