const router = require("express").Router();
const { Order, OrderDetails, Product } = require("../../models");

//create new orderDetail by orderId
router.post("/", async (req, res) => {
  try {
    const cartItems = JSON.parse(req.body.cartItems);

    for (let item of cartItems) {
      const newOrderDetail = await OrderDetails.create({
        product_id: item.product.id,
        quantity: item.purchaseQuantity,
        order_id: req.body.order_id,
      });
    }

    res.status(200);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

//get all order-details
router.get("/", async (req, res) => {
  try {
    const orderDetails = await OrderDetails.findAll({});
    res.json(orderDetails);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

module.exports = router;
