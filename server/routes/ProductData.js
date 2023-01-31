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

router.route("/owner").post(async (req, res) => {
  try {
    const owner = req.body.owner;
    console.log(owner);
    const Result = await Products.find({ owner: { $eq: owner } });
    console.log(Result);
    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
