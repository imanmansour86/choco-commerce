const sequelize = require("../config/connection");
const seedProduct = require("./productData");
const seedUser = require("./userData");
const seedOrderDetails = require("./orderDetailsData");
const seedOrder = require("./orderData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedProduct();

  await seedOrder();

  await seedOrderDetails();

  process.exit(0);
};

seedAll();
