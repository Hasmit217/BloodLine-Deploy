require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const BloodRequest = require("./models/bloodReq");


const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const bloodReqRoute = require("./routes/bloodReq");


mongoose.connect("mongodb+srv://ekanshlohiya98:Bloodline%40she98@cluster0.9k4kzet.mongodb.net/bloodlineDB");

app.use("/",bloodReqRoute);

app.listen(8080, function() {
    console.log("Server started on port 8080");
  });
