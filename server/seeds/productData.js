const { Product } = require("../models");

const productData = [
  {
    name: "Milk Nougat",
    description:
      "Brown sugar nougat with roasted, unsalted peanuts in smooth milk chocolate",
    image: "nougat.jpeg",
    price: 10,
  },

  {
    name: "Dark Vanilla Buttercream",
    description:
      "Buttery, creamy soft center with a touch of vanilla, enrobed in rich dark chocolate",
    image: "darkbuttercream.jpeg",
    price: 30,
  },

  {
    name: "Dark caramel",
    description:
      "Chocolate butter caramel and creamy vanilla caramel coated in smooth dark chocolate",
    image: "dark.jpeg",
    price: 40,
  },
  {
    name: "Milk caramel",
    description:
      "Chocolate butter caramel and creamy vanilla caramel coated in smooth milk chocolate",
    image: "milk.jpeg",
    price: 20,
  },

  {
    name: "Raspberry Truffle",
    description:
      "Truffle center of dark chocolate, cream and raspberries covered in rich dark chocolate",
    image: "raspberry.jpeg",
    price: 30,
  },

  {
    name: "Milk Coconut Cream",
    description:
      "Creamy soft center with angel flake coconut covered in smooth milk chocolate",
    image: "coconut.jpeg",
    price: 40,
  },
  {
    name: "Dark Chocolate Truffle",
    description:
      "Rich, creamy truffle center of semi-sweet chocolate and chocolate chips covered in rich dark chocolate",
    image: "dark-chocolate-truffle.jpeg",
    price: 20,
  },

  {
    name: "Milk Mocha",
    description:
      " Creamy center flavored with coffee and cream covered in smooth milk chocolate and decorated with chocolate sprinkles",
    image: "mocha.jpeg",
    price: 30,
  },

  {
    name: "Milk Walnut",
    description:
      "Walnuts combined with buttery caramel and dipped halfway in rich milk chocolate",
    image: "milk-walnut.jpeg",
    price: 40,
  },
  {
    name: "Milk Caramel Almond",
    description:
      "Buttery brown sugar caramel with a touch of maple sugar and almonds enrobed in smooth milk chocolate",
    image: "almond-square.jpeg",
    price: 20,
  },

  {
    name: "Milk Vanilla Buttercream",
    description:
      "Buttery, creamy soft center with a touch of vanilla, covered in smooth milk chocolate.",
    image: "milk-buttercream.jpeg",
    price: 30,
  },

  {
    name: "Dark caramel",
    description:
      "Chocolate butter caramel and creamy vanilla caramel coated in smooth dark chocolate",
    image: "dark-pattie.jpeg",
    price: 40,
  },
  {
    name: "Dark Peanut Brittle",
    description:
      "Buttery peanut brittle wrapped in rich, creamy dark chocolate",
    image: "dark-peanut-brittle.jpeg",
    price: 20,
  },

  {
    name: "Lemon Truffle",
    description:
      "Smooth truffle center of white chocolate and lemon covered in dark chocolate",
    image: "lemon-truffle.jpeg",
    price: 30,
  },

  {
    name: "Apple Pie Truffle",
    description:
      "Creamy truffle center of white chocolate, Granny Smith Apples and a touch of cinnamon covered in white chocolat",
    image: "apple-pie-truffle.jpeg",
    price: 40,
  },
  {
    name: "Dark Marzipan",
    description:
      "Almond paste with honey and powdered sugar covered in rich dark chocolate.",
    image: "marzipan.jpeg",
    price: 40,
  },
];

const seedProduct = () =>
  Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedProduct;
