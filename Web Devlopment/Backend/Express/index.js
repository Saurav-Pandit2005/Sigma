const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;    //8080

app.listen(port, () => {
    console.log(`app is listing on port ${port}`);
});

// app.use((req, res) => {
//     console.log("Request Received");
//     res.send("Basics Response..");
// });

app.get("/", (req, res) => {
    res.send("Hello , i am Saurav")
});

// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     res.send(`<h1>Welcome to the page of @${username}</h1>`);
// });

// app.get("/contact", (req, res) => {
//     res.send("You are here contact path");
// });

// app.get("/search", (req, res) => {
//     res.send("You are here search path");
// });

// app.get((req, res) => {
//     res.satus(404).send("this path dose not found");
// });

app.get("/search", (req, res) => {
    let { q } = req.query;

    if(!q){
        console.log("<h1>Nothing Searched..</h1>");
    }
    res.send(`<h1>search result for query : ${q}</h1>`);
});
