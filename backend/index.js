require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb+srv://ekanshlohiya98:Bloodline%40she98@cluster0.9k4kzet.mongodb.net/bloodlineDB");


const BloodRequestSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    bloodgrp: String,
    contactName:  String,
    contactNameRel: String,
    contactNum: Number,
    email: String,
    address: String,
    treatment: String,
    remark: String,
    state: String,
    district: String,
    city: String,
    hospital: String
});

const BloodRequest = mongoose.model("BloodRequest",BloodRequestSchema);

// const bloodRequest = new BloodRequest({
//     name: "Hasmit",
//     age: 22,
//     gender: "male",
//     bloodgrp: "B+",
//     contactName: "Ekansh",
//     contactNameRel: "Father",
//     contactNum: 8299812669,
//     email: "abc@123.com",
//     address: "gandhinagar",
//     treatment: "infertility",
//     remark: "NA",
//     state: "Gujarat",
//     district: "gandhinagar",
//     city: "gandhinagar",
//     hospital: "hi-tech"
// })

// bloodRequest.save();

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });