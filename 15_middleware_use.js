const e = require("express");
const express = require("express");

const app = express();

app.use([logger, auth]);

app.get("/", (req, res) => {
  res.status(200).send("Just a Title");
  res.end();
});
app.get("/home", (req, res) => {
  res.status(200).send("Welcome to Home!");
  res.end();
});

app.get("/home/sign-in", (req, res) => {
    res.writeHead(203, {'content-type': 'text/html'}); 
    res.write(`<h1> Sign in page</h1>`);
  if (req.admin) {
    res.write(`<p> Admin Welcome!</p>`);
  } else {
    res.write("<p> Ordinary User :(</p> ");
  }
  res.end();
});

function logger(req, res, next) {
  let time = new Date();
  console.log(`URL: ${req.url}, time: ${time}`);
  next();
}

function auth(req, res, next) {
  let queries = req.query;
  if (queries && queries.user === "otee") {
    req.admin = true;
  } else {
    req.admin = false;
  }
  console.log(`admin: ${req.admin}`)
  next();
}

app.listen(4000, () => console.log("Server is listenning"));
