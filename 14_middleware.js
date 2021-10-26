const express = require('express');

const app = express();

app.get("/", logger, (req, res) =>{
    res.status(200).send("Just a Title");
    res.end();
})

app.get("/home", logger, (req, res) => {
    res.status(200).send("Welcome to Home!");
    res.end();
})

function logger(req, res, next){
    let time = new Date();
    console.log(`URL: ${req.url}, time: ${time}`)
    next();
}



app.listen(4000, () => console.log("Server is listenning"));