const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const history = new mongoose.Schema({
  flowrate: { type: String, required: false },
  user: { type: String, required: true },
  productname: { type: String, required: true },
  startdate: { type: String, required: false },
  enddate: { type: String, required: false },
  owner: { type: String, required: true },
  date: { type: String, required: false },
  amount: { type: String, required: false },
});

const History = mongoose.model("History", history);
module.exports = History;
