const { user } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  create(a,b,c,d) {
    return user.create({user_name:a,password:b,full_name:c,token:d});
  },

  update(id, updateArgs) {
    return user.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return user.destroy(id);
  },

  find(a,b) {
    return user.findOne({where:{
        [Op.and]: [{ user_name: a },{token:b}]  
    }});
  },

  findToken(a){
    return user.findOne(
      {where:{
        token:a
      }}
    )
  },

  findAll() {
    return User.findAll();
  },

  getTotalUser() {
    return user.count();
  },
};
