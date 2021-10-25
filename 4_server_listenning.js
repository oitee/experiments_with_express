const http = require("http");
const server = http.createServer((req, res) => {
    console.log("New Request!!")
    if (req.url === "/") {
    res.write("well well well \n");
    res.write("HOME");
  }
  res.end();
});
server.listen(4000,() => console.log("Server listenning..."));