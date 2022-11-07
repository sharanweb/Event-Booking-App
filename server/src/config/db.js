const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://wishtree:wishtree@cluster0.ghwomsr.mongodb.net/test"
    );

    console.log("connected to database");
  } catch (error) {
    console.error("connection failed");
    console.error("err", error.message);
  }
};

module.exports = connect;
