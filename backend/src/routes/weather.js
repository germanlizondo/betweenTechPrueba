const express = require('express');
const app = express();
const WeatherController = require('../controllers/WeatherController');


app.get('/all-data', WeatherController.getAllWeatherData)

app.post('/add', WeatherController.saveWeather)

app.delete('/delete/:id', WeatherController.deleteWeather)

module.exports = app;
