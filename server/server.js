require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./db");
const PostProdcut = require("./routes/ProductUpdate");
const ProductData = require("./routes/ProductData");
const Checkid = require("./routes/CheckId");
const Ads = require("./routes/ads");
const History = require("./routes/history");
const CheckRole = require("./routes/Login");
connection();

// middlewares
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/api/postproduct", PostProdcut);
app.use("/api/productData", ProductData);
app.use("/api/Checkid", Checkid);
app.use("/api/history", History);
app.use("/api/ads", Ads);
app.use("/api/login", CheckRole);

const port = 8081;
app.listen(port, console.log(`Listening on port ${port}...`));
