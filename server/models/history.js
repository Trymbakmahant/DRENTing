const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const history = new mongoose.Schema({
  flowrate: { type: String, required: true },
  user: { type: String, required: true },
  productname: { type: String, required: true },
  startdate: { type: String, required: true },
  enddate: { type: String, required: true },
  owner: { type: String, required: true },
});

const History = mongoose.model("History", history);
module.exports = History;
