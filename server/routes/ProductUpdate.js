const router = require("express").Router();

const Products = require("../models/Product");

router.route("/").post(async (req, res) => {
  try {
    const {
      name,
      description,
      image,
      catogory,
      rental,
      buying,
      owner,
      index,
      ads,
    } = req.body;

    const product = new Products({
      name,
      description,
      imageUrl: image,
      catogory,
      rental,
      buying,
      owner,
      index,
      ads,
    });

    await product.save();

    res.send({ message: "sucsses" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
