const mongoose = require('mongoose')
const InsertSqlService = require('../services/InsertSqlService') 

mongoose.connect(`mongodb://${process.env.USER_MONGO}:${process.env.USER_PASSWORD}@host.docker.internal:27017/weather?authSource=admin`,
(err, res) => {
    if (err) throw err

    console.log("Database Online");
    InsertSqlService.insertData();
});