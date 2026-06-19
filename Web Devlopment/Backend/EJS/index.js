const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));


app.set("veiw engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/hello", (req, res) => {
    res.send("hello");
})

// app.get("/rolldice", (req, res) => {
//     res.render("rolldice.ejs");
// });

app.get("/rolldice", (req, res) => {
    let dicevalue = Math.floor(Math.random() *6 ) + 1;
    res.render("rolldice.ejs", { dicevalue : dicevalue});
})

app.get("/ig/:username", (req, res) => {
    // const followers = ["adam", "saurav", "aditya", "bhumi"];
    // let {username} = req.params;
    // console.log(username);

    let {username} = req.params
    const instadata = require("./data.json");
    const data = instadata[username];
    if(data){
        res.render("instagram.ejs", { data });
    }else{
        res.render("error.ejs")
    }
    console.log(data);
})

app.listen(port, ()=> {
    console.log(`listning on port ${port}`);
});