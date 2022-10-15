'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.car, {as: 'car', foreignKey: 'car_id'});
    }
  }
  record.init({
    description: DataTypes.TEXT,
    car_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'record',
  });
  return record;
};