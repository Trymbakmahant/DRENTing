const router = require("express").Router();

const Products = require("../models/Product");

router.route("/").post(async (req, res) => {
  try {
    const id = req.body.id;
    const Result = await Products.find({ _id: { $eq: id } });

    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
