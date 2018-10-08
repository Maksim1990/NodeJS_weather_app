const request = require('request');
const argv = require('yargs').argv;
const config = require('./config');
const tuc = require('temp-units-conv');

let apiKey = config.data.apiKey;
let city = argv.c || config.data.defaultCity;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)

    //-- Convert weather to Celsius
    let conwertWeather=tuc.k2c(weather.main.temp).toFixed(2);
    let message = `It's ${conwertWeather} C  (${weather.main.temp} K) degrees in ${weather.name}!`;
    console.log(message);
  }
});
