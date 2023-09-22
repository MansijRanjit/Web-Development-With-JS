const http = require("http");
const fs = require("fs");
const url = require("url");

/*
//Split web address into readable part

const adr = "http://localhost:8080/default.htm?year=2023&month=september";
const q = url.parse(adr, true);

console.log(q);
console.log(q.host);
console.log(q.pathname);
*/

//Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    //console.log(filename);
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
