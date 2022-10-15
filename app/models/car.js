'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      car.hasMany(models.record, {
        foreignKey: 'car_id'
      })
    }
  }
  car.init({
    name: DataTypes.TEXT,
    color: DataTypes.STRING,
    transmission: {type:DataTypes.INTEGER,
      validate:{max:2,min:1}},
    deleted: {type:DataTypes.INTEGER,
      validate:{max:1,min:0}},
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'car',
  });
  return car;
};