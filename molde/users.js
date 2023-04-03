const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  image: {
    type: String,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("users", user);
