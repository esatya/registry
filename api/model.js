const Sequelize = require("sequelize");
const db = require("../utils/db");

const Bank = db.define(
  "Banks",
  {
    bisCode: { type: Sequelize.STRING, allowNull: false, unique: true },
    name: { type: Sequelize.STRING, allowNull: false },
    address: { type: Sequelize.STRING },
    phone: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    logoUrl: { type: Sequelize.STRING }
  },
  {
    timestamps: false
  }
);

module.exports = { Bank };
