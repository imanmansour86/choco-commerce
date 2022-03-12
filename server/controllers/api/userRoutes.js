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

//post a new user-login
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
    res.status(201).json({ created_user, token: token });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
