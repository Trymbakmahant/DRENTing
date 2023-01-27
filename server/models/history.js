const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const history = new mongoose.Schema({
  Flowrate: { type: String, required: true },
  addressofuser: { type: String, required: true },
  productname: { type: String, required: true },
  startdate: { type: String, required: true },
  enddate: { type: String, required: true },
});

const History = mongoose.model("History", history);
module.exports = History;
