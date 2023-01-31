const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const ads = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  catogory: { type: String, required: true },
  rental: { type: String, required: true },
  buying: { type: String, required: true },
  owner: { type: String, required: true },
});

const Ads = mongoose.model("Ads", ads);
module.exports = Ads;
