const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("HEY! Welcome to the Home Page!");
  }
  else if (req.url === "/about") {
    res.end(`
        <h1> About Me!</h1>
        <p> Hey! Just learning to set up a web server!</p>
        `);
  }
  else if (req.url === "/home") {
    res.end(`
        <h1> Home Sweet Home!</h1>
        `);
  }
  res.end(`
    <h1>404!<h1>
    <a href = "/"> May be head on to the home page?</a>
    `);
});
server.listen(4000);
