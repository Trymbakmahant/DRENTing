const router = require("express").Router();

const Logins = require("../models/login");

router.route("/").post(async (req, res) => {
  try {
    const { user, role } = req.body;
    const check = await Logins.find({ user: { $eq: user } });

    if (check.length > 0) {
      const roles = check[0].role;
      res.send({ message: "you already have", role: roles });
    } else {
      const Login = new Logins({
        user,
        role,
      });

      await Login.save();

      res.send({ message: "sucsses" });
    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
