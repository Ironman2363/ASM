const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product = new Schema({
  code_product: {
    type: String,
  },
  name_product: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  color: {
    type: String,
  },
  id_KH: {
    type: String,
  },
  name_KH: {
    type: String,
  },
  type_product: {
    type: String,
  },
});

module.exports = mongoose.model("product", product);
