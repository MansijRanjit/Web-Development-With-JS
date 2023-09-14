//////////Stringify and parse JSON/////////
/*
const intro = {
  name: "mansij",
  age: 22,
  hobby: "playing cricket,football,video games",
};

//JSON.stringify Turn Javascript object into string
  const stringify = JSON.stringify(intro);
  console.log(stringify);

//JSON.parse Convert data back into   Javascript object
  const parse = JSON.parse(stringify);
  console.log(parse);

*/

const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  //From site link https://openweathermap.org/current
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Nepal,Kathmandu&appid=6280234d12c32699496cd23bed2fd2a0&units=metric";
  https.get(url, function (response) {
    //console.log(response.headers);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      //console.log(weatherData);
      //console.log(weatherData.weather[0].description);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write(`<h1>Todays temperature is : ${temp}</h1>`);
      res.write("<p>The weather description is " + weatherDescription + "</p>");
      res.write("<img src=" + imageUrl + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
