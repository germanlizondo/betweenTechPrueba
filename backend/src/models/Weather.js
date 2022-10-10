const mongoose = require('mongoose');
const Schema = mongoose.Schema;


 const WeatherSchema = new Schema({

    date: {
        type: String,
        required: [true, 'Date required']
    },
    location: {
            city: {
                type: String,
                required: [true, 'Location city required']
            } ,
            country: {
                type: String,
                required: [true, 'Country city required']
            } 
    }, 
    hourly_temperature: {
        type: [Number],
        required: [true, 'Hourly temperature required']
    }
    

 });

 module.exports = mongoose.model('Weather', WeatherSchema);

