/////////////Simple Adder Calculator/////////////
/*
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); //bodyParser.urlencoded() is used to parse data that comes from an HTML form And by setting the extended option to true allows us to post nested objects.

app.get("/", function (req, res) {
  //console.log(__dirname); //__dirname gives file path
  res.sendFile(__dirname + "/index.html");
  //res.send("Hello World!!");
});

app.post("/", function (req, res) {
  //console.log(req.body);
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  res.send(`The sum of ${num1} and ${num2} is :${num1 + num2}`);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
*/

/////////////////Challenge :BMI Calculator//////////////////

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmicalculator", function (req, res) {
  res.sendFile(`${__dirname}/bmiCalculator.html`);
});

app.post("/bmicalculator", function (req, res) {
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);

  res.send(`Your BMI is ${weight / height ** 2}`);
});

app.listen(3000, function () {
  console.log("Server is running at port 3000");
});
