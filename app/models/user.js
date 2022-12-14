'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    user_name: {type:DataTypes.STRING,allowNull:false,unique:true,validate:{isEmail:true}},
    password: {type:DataTypes.STRING,allowNull:false,validate:{
      checkEmpty(value){
        if (value == '') {
          throw new Error("Password cannot be empty");
        }
      }
    }},
    full_name: DataTypes.TEXT,
    token: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};