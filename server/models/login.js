const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const Login = new mongoose.Schema({
  user: { type: String, required: true },
  role: { type: String, required: true },
});

const Logins = mongoose.model("Logins", Login);
module.exports = Logins;
