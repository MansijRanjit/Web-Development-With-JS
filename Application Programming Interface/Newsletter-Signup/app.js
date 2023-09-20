const express = require("express");
const bodyParser = require("body-parser");
const https = require("node:https");
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
  //const password = req.body.password;

  console.log(firstName, lastName, email);

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us21.api.mailchimp.com/3.0/lists/975e0b9f62";

  const options = {
    method: "post",
    auth: "mansij:37a8a38a7c123d6d627c1e8e59548ae8-us21",
  };

  const r = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.send("Successfully subscribed!");
    } else {
      res.send("There was error in signing up, please try again!");
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  r.on("error", function (e) {
    console.log(e);
  });

  r.write(jsonData);
  r.end;
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

//API key
//59c533e3fdc8d57da2f307df9770cb7e-
//37a8a38a7c123d6d627c1e8e59548ae8-us21

//Audience Id or List Id
//975e0b9f62
