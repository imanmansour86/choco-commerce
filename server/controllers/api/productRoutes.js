const router = require("express").Router();
const { Product } = require("../../models");

//get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({});
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log("hhh", req.params.id);
    const productData = await Product.findByPk(req.params.id);

    res.json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
