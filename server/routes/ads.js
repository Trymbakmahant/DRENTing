const router = require("express").Router();

const Ads = require("../models/Ads");

router.route("/").post(async (req, res) => {
  try {
    const { name, description, image, catogory, rental, buying, owner } =
      req.body;
    let imageId = image.split("/")[5];
    let imageUrl = `https://drive.google.com/uc?export=view&id=${imageId}`;

    const product = new Ads({
      name,
      description,
      imageUrl,
      catogory,
      rental,
      buying,
      owner,
    });

    await product.save();

    res.send({ message: "sucsses" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
