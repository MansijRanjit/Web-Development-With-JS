const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems =[];

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

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const dayInfo = today.toLocaleDateString("en-US", options); //Javascript date format
  res.render("list", { ListTitle: dayInfo, newList: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  console.log(req.body);

  if(req.body.list === "Work"){
    workItems.push(item); 
    console.log(workItems);
    res.redirect("/work");
  }
  else{
    items.push(item);
    console.log(items);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
  res.render("list",{ListTitle: "Work List", newList:workItems})
})

app.get("/about",function(req,res){
  res.render("about")
})
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
