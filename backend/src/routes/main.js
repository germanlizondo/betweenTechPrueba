const MainController = require('../controllers/MainController')

const express = require('express');
const app = express();

app.get('/', MainController.getIndex);


module.exports = app;

