const router = require("express").Router();
const { Product } = require("../../models");

//get all products
router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll({});
    res.json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
