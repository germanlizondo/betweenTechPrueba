const Weather = require("../models/Weather");
const WeatherRepository = require("../repositories/weatherRepository");
const HttpError = require("../exceptions/HttpError");
async function getAllWeatherData(queryParams) {
  try {

    if (queryParams.city) {
      
      const allData = await WeatherRepository.filterByLocation(queryParams);
      return allData;

    } else {
      const allData = await WeatherRepository.getAllWeatherData(queryParams);
      return allData;
    }
  } catch (err) {
    throw new HttpError(500, err.message);
  }
}

async function saveWeather(requestBody) {
  try {
    const weatherSaved = await WeatherRepository.saveWeather(
      new Weather({
        date: requestBody.date,
        location: {
          city: capitalizeFirstLetter(requestBody.location.city),
          country: capitalizeFirstLetter(requestBody.location.country),
        },
        hourly_temperature: requestBody.hourly_temperature,
      })
    );
    return weatherSaved;
  } catch (err) {
    throw new HttpError(400, err.message);
  }
}

async function deleteWeather(id) {
  try {
    const allData = await WeatherRepository.deleteWeather(id);
    return allData;
  } catch (err) {
    throw new HttpError(400, err.message);
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = { getAllWeatherData, saveWeather, deleteWeather };
