const { Order } = require("../models");

const orderData = [
  // {
  //   address: "1234 Parkland Road",
  //   user_id: 1,
  // },
  // {
  //   address: "62 Victor Avenu",
  //   user_id: 2,
  // },
  // {
  //   address: "3321 Payne Drive",
  //   user_id: 3,
  // },
];

const seedOrder = () =>
  Order.bulkCreate(orderData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedOrder;
