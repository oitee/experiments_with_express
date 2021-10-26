import * as http from 'http';
//import { createServer } from "http";
const server = http.createServer((req, res) =>{
    console.log("Request Received");
    //console.log(req.method);
    console.log(req.headers);
    if(req.method == "POST" && req.headers['colour-of-sky']){
        res.writeHead(200);
        res.write(`hello, ${req.headers['colour-of-sky']}`);
        res.end();
    }
    else if(req.method == "POST"){
        console.log("Sending");
        res.writeHead(200);
        res.write("Welcome");
        res.end();
    }else{
        res.writeHead(403);
        res.write("ERROR! (not really)");
        res.end();
    }
})

server.listen(4000);