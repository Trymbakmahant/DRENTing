const router = require("express").Router();

const Products = require("../models/Product");

router.route("/all").post(async (req, res) => {
  try {
    const Result = await Products.find();

    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
