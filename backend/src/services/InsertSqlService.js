const WeatherRepository = require("../repositories/weatherRepository");
const Weather = require("../models/Weather");

async function insertData() {
  const data = await WeatherRepository.getAllWeatherData({});

  if (data.length === 0) {
    console.log(`Insert Data To DB`);

    for (let index = 0; index < 10; index++) {
      WeatherRepository.saveWeather(
        new Weather({
          date: index + "/10/2022",
          location: {
            city: index % 2 === 0 ? "Barcelona" : "Madrid",
            country: "Spain",
          },
          hourly_temperature: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        })
      );
    }
  }
}

module.exports = { insertData };
