const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({});
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//post a new user-signup
router.post("/", async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, salt),
    };
    created_user = await User.create(user);
    token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      process.env.SECRET
    );
    res.status(201).json({
      user: {
        id: created_user.id,
        name: created_user.name,
        email: created_user.email,
      },
      token: token,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      process.env.SECRET
    );
    res.status(200).json({
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    res.status(400).json(err);
    console.error(err);
  }
});
module.exports = router;
