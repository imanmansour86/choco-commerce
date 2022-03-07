const router = require("express").Router();
const { Order, User } = require("../../models");

//get order for a certain user

router.get("/", async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get order for a userId
router.get("/:userId", async (req, res) => {
  try {
    const order = await Order.findOne({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
      where: {
        user_id: req.params.userId,
      },
    });

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
