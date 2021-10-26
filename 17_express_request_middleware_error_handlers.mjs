import express from "express";

const app = express();
app.use(logger);
app.get("/", (req, res) => {
  return res.status(200).send("Welcome!");
});

// path: /sky
//if method: post, reply: welcome
//if method: post + header: colour of sky, reply: welcome, value of header
//if method not post: error,

app.post("/sky", (req, res) => {
  let colour = req.headers["colour-of-sky"];
  if (colour) {
    return res.send(`Welcome ${colour}`);
  }
  return res.send(`Welcome`);
});
app.get("/sky/:id", (req, res) => {
  let param = req.params.id;
  return res.status(200).send(`Your id is ${param}`);
});

//otee.dev/search?key=val&key1=val1
//otee.dev/search/key

app.get("/search", (req, res) => {
  console.log(req.query);
  let sum = 0;
  let i = 0;
  while (i < 1000) {
    sum += Math.random().getKeys();
    i++;
  }

  if (req.query.key) {
    return res.send(`${req.query.key}, ${sum}`);
  }
  if (Object.keys(req.query).length != 0) {
    return res.send(`Other Keys, ${sum}`);
  }
  return res.send(`Other, ${sum}`);
});

//logs each request path and method
// and time taken to respond
app.use(errorHandler);
function logger(request, response, next) {
  //console.log();
  let requestTime = Date.now();
  next();
  console.log(
    `${request.method} ${request.url},  took ${
      Date.now() - requestTime
    } milli-seconds`
  );
}

function errorHandler(error, request, response, next) {
  console.log("Error Handler:");
  console.error(error);
  return response.status(500).send(`Opps! Some Error!`);
}

app.all("*", (req, res) => {
  return res.status(403).send("Error!");
});

app.listen(4000, () => console.log("Server Listennig,.."));
