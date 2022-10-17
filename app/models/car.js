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
    name: {type : DataTypes.TEXT,allowNull:false,
      validate:{
        checkType(value){
          if (typeof value !== typeof 'string') {
            throw new Error("Name Must be string");
          }
        }
      }},
    color: {type : DataTypes.STRING,
      allowNull:false,validate:{
        checkType(value){
          if (typeof value !== typeof 'string') {
            throw new Error("Color Must be string");
          }
        }
      }},
    transmission:{type:DataTypes.INTEGER,allowNull:false,validate:{max:2}},
    deleted: {type:DataTypes.INTEGER,validate:{max:1}},
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'car',
  });
  return car;
};