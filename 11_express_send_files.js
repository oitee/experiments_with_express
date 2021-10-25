const express = require('express');
const path = require('path');

const app = express();
const filePath = path.resolve(__dirname, "./index_draft.html");

// app.use(express.static("./public"));




app.get("/", (req, res) =>{
    console.log(filePath);
    res.sendFile(filePath);
    res.end();
})

app.listen(4000);