import { useState } from "react";

import "./weatherCard.css";
import Day from "../days/Day";

function WeatherCard({ day, hourlyTemperature, location }) {
  const [seeDay, setSeeDay] = useState(false);

  function openDay() {
    setSeeDay(seeDay ? false : true);
  }

  const media =
    hourlyTemperature.reduce((prev, current) => (current += prev)) /
    hourlyTemperature.length;

  return (
  
      <div className="col-lg-3">
        <div className="card  mb-3 pointer" onClick={openDay}>
          <div className="card-header bg-transparent ">
            {day} - {location.city}, {location.country}
          </div>
          <div className="card-body ">
            <h5 className="card-title">{media} ºC</h5>
          </div>
          <div className="card-footer bg-transparent ">
            Min: {Math.min(...hourlyTemperature)} | Max:{" "}
            {Math.max(...hourlyTemperature)}{" "}
          </div>
        </div>
        {seeDay
        ? hourlyTemperature.map((element, index) => {
            return (
              <Day
                key={index}
                hourlyTemperature={element}
              />
            );
          })
        : ""}
      </div>
     
   
  );
}

export default WeatherCard;
