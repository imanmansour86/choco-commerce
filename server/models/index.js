const User = require("./user");
const Order = require("./order");
const Product = require("./product");
const OrderDetails = require("./order-details");

//Order and Product have many to many relationship through OrderDetails table

Order.belongsToMany(Product, {
  through: {
    model: OrderDetails,
  },
  // Define an alias for when data is retrieved

  as: "order_product",
  foreignKey: "order_id",
});

Product.belongsToMany(Order, {
  through: {
    model: OrderDetails,
  },
  // Define an alias for when data is retrieved

  as: "product_order",
  foreignKey: "product_id",
});

// User and Order has one to many relationship

User.hasMany(Order, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Order.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Order, Product, OrderProduct };
