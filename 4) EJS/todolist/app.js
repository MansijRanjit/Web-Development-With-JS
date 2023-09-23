const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//   let today = new Date();
//   let currentDay = today.getDay();

//   if (currentDay === 0 || currentDay === 6) {
//     res.write("<h1>Holiday</h1>");
//     res.write(`<p>${currentDay}</p>`);
//   } else {
//     res.sendFile(__dirname + "/index.html");
//   }
// });

app.get("/", function (req, res) {
  let today = new Date();
  let currentDay = today.getDay();

  if (currentDay === 0 || currentDay === 6) {
    res.render("list", { day: "Weekend" });
  } else {
    res.render("list", { day: "Weekday" });
  }
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
