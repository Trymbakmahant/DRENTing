const router = require("express").Router();
const History = require("../models/history");

router.route("/renter").post(async (req, res) => {
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

router.route("/buyer").post(async (req, res) => {
  console.log(req.body);
  try {
    const { user, date, amount, productname, owner } = req.body;

    const history = new History({
      user,
      date,
      amount,
      productname,
      owner,
    });

    await history.save();

    res.send({ message: "sucsses" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/get/buyer").post(async (req, res) => {
  try {
    const adress = req.body.adress;

    const Result = await History.find({ user: { $eq: adress } });

    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/get/owner").post(async (req, res) => {
  try {
    const adress = req.body.adress;

    const Result = await History.find({ owner: { $eq: adress } });

    res.send(Result);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
module.exports = router;
