const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Product = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  catogory: { type: String, required: true },
  rental: { type: String, required: true },
  buying: { type: String, required: true },
});

const Products = mongoose.model("Products", Product);
module.exports = Products;
