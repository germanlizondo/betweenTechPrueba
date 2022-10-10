const Weather = require("../models/Weather");

async function getAllWeatherData(objectFiltred) {
  try {
    const allData = await Weather.find(objectFiltred);
    return allData;
  } catch (err) {
    throw err;
  }
}

async function filterByLocation(params) {
  try {
  
    const allData = await Weather.find({ "location.city": new RegExp("^"+params.city, 'i')});
    return allData;
  } catch (err) {
    throw err;
  }
}

async function saveWeather(weather) {
  try {
    const weatherSaved = await weather.save();
    return weatherSaved;
  } catch (err) {
    throw err;
  }
}

async function deleteWeather(id) {
  try {
    await Weather.deleteOne({ _id: id });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllWeatherData,
  filterByLocation,
  saveWeather,
  deleteWeather,
};
