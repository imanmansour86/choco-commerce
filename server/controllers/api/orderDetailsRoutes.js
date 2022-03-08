const router = require("express").Router();
const { Order, OrderDetails, Product } = require("../../models");

//create new orderDetail by userId

router.post("/:orderId", async (req, res) => {
  try {
    const newOrderDetail = await OrderDetails.create({
      ...req.body,
      order_id: req.params.orderId,
    });
    res.status(200).json(newOrderDetail);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

//get all order-details
router.get("/", async (req, res) => {
  try {
    const orderDetails = await OrderDetails.findAll({
      include: [
        {
          model: Order,
          attributes: ["address"],
        },
      ],
    });
    res.json(orderDetails);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

module.exports = router;
