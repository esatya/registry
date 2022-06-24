let model = require("./model");
const { Op } = require("sequelize");

module.exports = {
  /************ Bank  ************/
  addBank: async bank => {
    try {
      return model.Bank.create(bank);
    } catch (e) {}
  },

  removeBank(bisCode) {
    return model.Bank.destroy({ where: { bisCode } });
  },

  getBank(bisCode) {
    return model.Bank.findOne({ where: { bisCode } });
  },

  async listBanks(name) {
    name = name && name.length > 2 ? { name: { [Op.like]: "%" + name + "%" } } : {};
    console.log(name);
    return model.Bank.findAll({ where: name });
  }
};
