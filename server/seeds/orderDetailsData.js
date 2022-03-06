const { OrderDetails } = require("../models");

const OrderDetailsData = [
  {
    order_id: 1,
    product_id: 1,
    quantity: 1,
  },
  {
    order_id: 2,
    product_id: 2,
    quantity: 4,
  },
  {
    order_id: 3,
    product_id: 1,
    quantity: 1,
  },
  {
    order_id: 3,
    product_id: 2,
    quantity: 1,
  },
  {
    order_id: 3,
    product_id: 3,
    quantity: 2,
  },
];

const seedOrderDetails = () =>
  OrderDetails.bulkCreate(OrderDetailsData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedOrderDetails;
