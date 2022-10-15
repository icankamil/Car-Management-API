const { record } = require("../models");

module.exports = {
  create(a,b) {
    return record.create({
      description:a,
      car_id:b,
    });
  }
};
