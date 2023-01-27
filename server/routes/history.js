const router = require("express").Router();
const History = require("../models/history");

router.route("/").post(async (req, res) => {
  try {
    const { flowrate, user, startdate, enddate, productname } = req.body;

    const history = new Hsitory({
      flowrate,
      user,
      productname,
      startdate,
      enddate,
    });

    await history.save();

    res.send({ message: "sucsses" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/get").post(async (req, res) => {
  try {
    const adress = req.body.adress;
    const Result = await History.find({ addressofuser: { $eq: adress } });

    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
