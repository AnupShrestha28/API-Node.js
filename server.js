const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/service", (req, res) => {
    // res.send("Service Page");
        res.json(
            [
                {
                "_id": "64664e6af2d8f422f61588b2",
                "index": 0,
                "guid": "2c90a55d-993d-4f3b-99c8-27a2c053ef6d",
                "isActive": false,
                "balance": "$3,880.84"
                }
            ]
        )
    // res.send("<h1>Hi i am Anoop</h1>")   
})

app.post("/service", (req, res) => {
    res.send("Made some changes on service page");
})

app.get("/about", (req, res) => {
    res.send("About Page");
})

// server starting
app.listen(8000, () => {
    console.log("Server is connected to port 8000");
})