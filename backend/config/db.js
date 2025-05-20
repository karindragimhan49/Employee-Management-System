const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const dburl =
  "mongodb+srv://karindragimhan49:karindragimhan69@cluster3.qrozc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connection = async () => {
  try {
    await mongoose.connect(dburl);
    console.log("MongoDB Connected~");
  } catch (e) {
    console.error(e.message);
    process.exit();
  }
};

module.exports = connection;
