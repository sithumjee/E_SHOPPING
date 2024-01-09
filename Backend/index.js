const port = 4000;
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());

//Database Connection with mongoGB

mongoose.connect(
  "mongodb+srv://sithumjeevantha:Sithum2000@cluster0.8ihmoek.mongodb.net/E_SHOPPING"
);

//API creation

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port: " + port);
  } else {
    console.log("Error: " + error);
  }
});
