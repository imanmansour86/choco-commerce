const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class OrderDetails extends Model {}

OrderDetails.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "order",
        key: "id",
      },
    },

    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "order-details",
  }
);

module.exports = OrderDetails;
