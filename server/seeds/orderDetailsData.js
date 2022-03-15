const { OrderDetails } = require("../models");

const OrderDetailsData = [];

const seedOrderDetails = () =>
  OrderDetails.bulkCreate(OrderDetailsData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedOrderDetails;
