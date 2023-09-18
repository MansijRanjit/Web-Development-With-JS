const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  const password = req.body.password;

  // console.log(firstName, lastName, email, password);

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
      },
    ],
  };
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

//API key
//59c533e3fdc8d57da2f307df9770cb7e-us21

//Audience Id or List Id
//975e0b9f62
