const { User } = require("../models");

const userData = [
  {
    name: "Tony",
    email: "tony@gmail.com",
    password: "password",
  },
  {
    name: "Maya",
    email: "maya@gmail.com",
    password: "password",
  },
  {
    name: "Ben",
    email: "ben@gmail.com",
    password: "password",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
