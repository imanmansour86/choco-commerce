const { Product } = require("../models");

const productData = [
  {
    name: "rochee",
    description: "Chocolate with hazelnut",
    price: 20,
  },

  {
    name: "Milk Vanilla Buttercream",
    description: "Chocolate filled with buttercream",
    price: 30,
  },

  {
    name: "Milk caramel",
    description: "Chocolate filled with caramels",
    price: 40,
  },
];

const seedProduct = () =>
  Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedProduct;
