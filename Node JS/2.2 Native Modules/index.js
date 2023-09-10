const fs = require("fs");

// fs.writeFile("intro.txt", "Hello World", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

fs.readFile("./intro.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
