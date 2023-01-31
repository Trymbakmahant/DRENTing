const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Product = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  catogory: { type: String, required: true },
  rental: { type: String, required: true },
  buying: { type: String, required: true },
  owner: { type: String, required: true },
  index: { type: String, required: true },
  ads: { type: Boolean, required: true },
});

const Products = mongoose.model("Products", Product);
module.exports = Products;
