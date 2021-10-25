const Express = require('express');
const app = new Express();




app.get("/", (req, res) => {
    console.log("Landing Page Request");
    res.status(200).send("Welcome to Home Page!");
})
 app.get("/about", (req, res) => {
    console.log("About page request!"); 
    res.status(200).send("About Me!");
 });

app.all("*", (req, res) => {
    console.log(`Request is for: ${req.url}`);
    res.status(400).send("404! Not found");
})



app.listen(4000, () => console.log("Server listenning..."))