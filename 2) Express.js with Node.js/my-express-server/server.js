const express = require("express");
const app = express();
const port = 8080;

//app responds for requests to the root URL (/) or route
app.get("/", function (request, response) {
  response.send("<h1>Hello World</h1>"); //send browser request as a html
  //response.send("Supermansij is here!!"); //send browser request as a string
});

//response to request to /contact
app.get("/contact", function (req, res) {
  res.send("Contact me at :mansijranjit@gmail.com");
});

//response to request to /about
app.get("/about", function (req, res) {
  res.send(
    "Hi my name is Mansij Ranjit.I'm a Computer Engineer.I love to build programs,and play games."
  );
});

//app starts a server and listens on port for connections
app.listen(port, function () {
  console.log(`Server Started on port ${port}`);
});
