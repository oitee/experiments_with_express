const express = require('express');

const app = express();

app.get("/v1/v2/search", (req, res) =>{
   console.log(req.query);
    console.log("___");
    res.status(200).send("Just a Title");
    res.end();
})



app.listen(4000, () => console.log("Server is listenning"));