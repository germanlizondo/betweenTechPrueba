const weatherService = require("../services/weatherService");

async function getAllWeatherData(req, res) {
 try{
    const allData = await weatherService.getAllWeatherData(req.query);

      res.status(200).send(allData);
 }catch(err) {
    res.status(err.status).send({
        message: err.message,
      });
 }
   
}

async function saveWeather(req, res) {
    try{
        const allData = await weatherService.saveWeather(req.body);
        res.send(allData);
    }catch(err) {
        res.status(err.status).send({
            message: err.message,
          });
    }


}

async function deleteWeather(req, res) {
  try {
    await weatherService.deleteWeather(req.params.id);
      res.status(200).send({
        "message": "Id: " + req.params.id +" deleted"
      })
  } catch (err) {
    res.status(err.status).send({
      message: err.message,
    });
  }
}

module.exports = { getAllWeatherData, saveWeather, deleteWeather };
