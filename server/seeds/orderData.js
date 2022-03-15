const { Order } = require("../models");

const orderData = [];

const seedOrder = () =>
  Order.bulkCreate(orderData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedOrder;
