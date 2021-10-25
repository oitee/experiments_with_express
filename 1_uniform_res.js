const http = require('http');
const server = http.createServer((req, res) =>{
    res.write("HELLO NOT WORLD");
    res.write("bye!");
    res.end();
}
)
server.listen(4000);