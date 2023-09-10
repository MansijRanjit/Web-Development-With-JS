//File System

fs = require("fs");

/* fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created*/
// fs.writeFile("intro.txt", "Hello World", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

/** fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created*/
fs.appendFile("./intro.txt", " Coooool", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

/**fs.readFile() method is used to read files on your computer. */
fs.readFile("./intro.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
