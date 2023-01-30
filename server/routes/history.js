const router = require("express").Router();
const History = require("../models/history");

router.route("/").post(async (req, res) => {
  console.log(req.body);
  try {
    const { flowrate, user, startdate, enddate, productname, owner } = req.body;

    const history = new History({
      flowrate,
      user,
      productname,
      startdate,
      enddate,
      owner,
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

    const Result = await History.find({ user: { $eq: adress } });

    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
