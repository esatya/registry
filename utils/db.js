const { Sequelize } = require("sequelize");
const path = require("path");
const config = require("../data/config");

module.exports = new Sequelize("database", config.db.user, config.db.password, {
  host: "0.0.0.0",
  dialect: "sqlite",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: false,
  storage: path.resolve(config.db.name)
});
