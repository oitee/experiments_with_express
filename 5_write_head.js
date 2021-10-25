const http = require("http");
const server = http.createServer((req, res) => {
    
    res.writeHead(200, {'content-type': 'text/html'});  
    res.write("well well well!");
    res.write("<h1> NAME OF WEBSITE</h1>")
    res.write("HOME");
    res.end();

  
});
server.listen(4000);
