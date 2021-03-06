const User = require("./user");
const Order = require("./order");
const Product = require("./product");
const OrderDetails = require("./order_details");

//Order and Product have many to many relationship through OrderDetails table

Order.belongsToMany(Product, {
  through: {
    model: OrderDetails,
  },

  as: "order_product",
  foreignKey: "order_id",
});

Product.belongsToMany(Order, {
  through: {
    model: OrderDetails,
  },

  as: "product_order",
  foreignKey: "product_id",
});

User.hasMany(Order, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Order.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Order, Product, OrderDetails };
