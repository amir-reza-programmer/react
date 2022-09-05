import "./ExpenceDetailDate.css";
import React from "react";

const ExpenceDetailTitle = ({ dateString }) => {
  const formatDate = () => {
    let [weekDay, month, day, year] = dateString.split(" ");
    switch (month) {
      case "Jan":
        month = "January";
        break;
      case "Mar":
        month = "March";
        break;
      case "May":
        month = "May";
        break;
      case "Jul":
        month = "July ";
        break;
      case "Sep":
        month = "September";
        break;
      case "Nov":
        month = "November";
        break;
      case "Feb":
        month = "February";
        break;
      case "Apr":
        month = "April";
        break;
      case "Jun":
        month = "June";
        break;
      case "Aug":
        month = "August";
        break;
      case "Oct":
        month = "October";
        break;
      default:
        month = "December";
    }
    console.log(weekDay, month, day, year);
    return (
      <React.Fragment>
        <span>{month}</span>
        <span>{year}</span>
        <span>{day}</span>
      </React.Fragment>
    );
  };

  return <div className="expence-detail__date">{formatDate()}</div>;
};

export default ExpenceDetailTitle;
