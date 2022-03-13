const router = require("express").Router();
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const orderRoutes = require("./orderRoutes");
const orderDetails = require("./orderDetailsRoutes");
const payment = require("./payment");

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/order-details", orderDetails);
router.use("/payment", payment);

module.exports = router;
