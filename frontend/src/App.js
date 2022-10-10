import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import WeatherCard from "./components/weatherCard/WeatherCard";

function App() {
  const [weather, setWeather] = useState([]);
  const [cityToFind, setCityToFind] = useState("");

  useEffect(() => {
    let url = "";

    console.log(cityToFind)
    if (cityToFind === "" || cityToFind==="auto") {
      setCityToFind("")
      url = "/api/all-data";
    } else {
      url = "/api/all-data?location.city=" + cityToFind;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  }, [cityToFind]);

  const findCity = (e) => {
    setCityToFind(e.target.value);
  };

  const getDataEveryMinute =() => {
    const interval = setInterval(() => {
      setCityToFind("auto");
    }, 60000);

    return () => clearInterval(interval);
  }

  getDataEveryMinute();

  if (weather === []) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="App">
        <Navbar cityToFind={findCity} />
        <div className="container mt-5">
          <div className="row">
            {weather.map((element, index) => {
              return (
                <WeatherCard
                  key={index}
                  day={element.date}
                  hourlyTemperature={element.hourly_temperature}
                  location={element.location}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
