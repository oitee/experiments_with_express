const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./index_draft.html');

const server = http.createServer((req, res) => {
    let url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    }
    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(`<h1> About Page </>`);
        res.end();
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.write(`<h1> 404! Not found </>`);
        res.end();
    }
});

server.listen(4000);