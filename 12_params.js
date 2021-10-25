const express = require('express');

const app = express();







app.get("/:page", (req, res) =>{
    res.send(`Welcome to ${req.params.page}`);
    res.end();
})
app.get("/:page1/:page2", (req, res) =>{
    res.send(`Welcome to ${req.params.page2} of ${req.params.page1}`);
    res.end();
})

app.listen(4000);