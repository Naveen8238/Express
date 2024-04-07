const mongoose = require("mongoose");

// Connection to the database
async function dbConnection() {
  try {
    await mongoose.connect("mongodb://127.0.1:27017/mongoose");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Connection error:", err);
  }
}

module.exports = dbConnection; // Use module.exports instead of module.export
