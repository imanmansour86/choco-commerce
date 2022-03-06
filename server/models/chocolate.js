const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./user");

class Chocolate extends Model {}

Chocolate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },

    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "chocolate",
  }
);

module.exports = Chocolate;
