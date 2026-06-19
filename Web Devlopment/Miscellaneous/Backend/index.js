const express = require("express");
const app = express();

const port = 8080;

// For Post Request Handling... 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(port, () =>{
    console.log(`listing to port ${port}`)
})

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`Standard Get Response! Welcome ${user}!`);
})

app.post("/register", (req, res) => {
    // console.log(req.body);
    let { user, password} = req.body;
    res.send(`Standard Post Response! Welcome ${user}!`);
})
