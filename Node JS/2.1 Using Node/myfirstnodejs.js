const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;

//create a server object:
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url); //req argument represents the request from the client, as an object which has a property called "url" which holds the part of the url that comes after the domain name
    res.write(`
    Supermansij :`);
    res.end("Hello World!");
  })
  .listen(port, hostname, () => {
    console.log("Supermansij is Here");
  });

//run in terminal using command node myfirstnodejs.js then open browser and use url http://127.0.0.1:8080/
