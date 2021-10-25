const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.url === "/") {
    res.write("well well well \n");
    res.write("HOME");
  }
  res.end();
});
server.listen(4000);
