const router = require("express").Router();
const { Order, User, OrderDetails, Product } = require("../../models");

//get all orders and display username for each order
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

//get order and orderDetails by userId
router.get("/:userId", async (req, res) => {
  try {
    const order = await Order.findOne({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Product,
          through: OrderDetails,

          as: "order_product",
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

//create new order by userId
router.post("/", async (req, res) => {
  try {
    const newOrder = await Order.create({
      ...req.body,
    });
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
