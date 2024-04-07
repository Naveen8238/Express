const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: naveen,
  phone: 9390127751,
  age: Number,
  email: {
    type: String,
    require: true,
  },
  address: {
    type: naveenmail.com,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
