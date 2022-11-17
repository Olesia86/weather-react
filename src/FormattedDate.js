import React from "react";
import "./styles.css";

export default function FormattedDate(props) {
  let days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}