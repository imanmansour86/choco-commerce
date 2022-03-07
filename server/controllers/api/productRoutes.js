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

router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create({
      ...req.body,
    });
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!product) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
