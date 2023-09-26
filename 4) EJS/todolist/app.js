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
  //let currentDay = today.getDay();

  // if (currentDay === 0) {
  //   res.render("list", { day: "Sunday" });
  // } else if (currentDay === 1) {
  //   res.render("list", { day: "Monday" });
  // } else if (currentDay === 2) {
  //   res.render("list", { day: "Tuesday" });
  // } else if (currentDay === 3) {
  //   res.render("list", { day: "Wednesday" });
  // } else if (currentDay === 4) {
  //   res.render("list", { day: "Thursday" });
  // } else if (currentDay === 5) {
  //   res.render("list", { day: "Friday" });
  // } else if (currentDay === 6) {
  //   res.render("list", { day: "Saturday" });
  // }

  const options = { weekday: "long", month: "long", day: "numeric" };
  const day1 = today.toLocaleDateString("en-US", options);
  res.render("list", { day: day1 });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
