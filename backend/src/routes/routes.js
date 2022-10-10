const express = require('express');
const app = express();

app.use(require('./main'))
app.use('/api',require('./weather'))


module.exports = app;
