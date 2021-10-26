const express = require("express");
const path = require("path");

const app = express();
const filePath = path.resolve(__dirname, "./index_draft.html");

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  console.log(filePath);
  res.sendFile("/home/ot/projects/experiments_with_express/index_draft.html");
  res.end();
});

// app.get("/about", (req, res) => {
//   console.log("About");
//   res.sendFile(path.resolve(__dirname, "about1.html"));
// });

app.get("/about", (req, res) => {
  res.sendFile("./about.html");
});

app.listen(4000);
