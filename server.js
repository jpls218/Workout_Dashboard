const express = require("express");
const mongoose = require("mongoose");

const PORT = 3002;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

app.listen(PORT, () =>{
    console.log(`App running on http://localhost:${POST}`);
});