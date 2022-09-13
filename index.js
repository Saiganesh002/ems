const express = require("express");

const app = express();

app.get("/saiganesh", (req, res)=> {
    res.send("Hello Saiganesh!");
});

app.listen(7000, () => {
    console.log("Server is listening on port 7000");
});