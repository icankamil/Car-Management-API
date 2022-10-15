const { car,record } = require("../models");

module.exports = {
  create(a,b,c,d,e) {
    return car.create({
      name:a,
      color:b,
      transmission:c,
      deleted:d,
      deleted_at:e
    });
  },

  update(id, updateArgs) {
    return car.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  updateDelete(id, updateArgs) {
    return car.update({deleted:updateArgs,deleted_at:new Date()}, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return car.destroy(id);
  },

  async find(id) {
    return await car.findOne({
      where:{
        id:id},
        include: {
          model: record,
          attributes: [['description', 'Log']] 
          // name = nama colomnya, namaToko = new value as nama colomn name
      }});
  },

  findAll() {
    return car.findAll({
      attributes : [['name','Car Series'],'color',['transmission','1=AT/2=MT']],where:{deleted:0}},
      );
  },

  async getTotalCar() {
    return await car.count({
      where:{deleted:0}
    });
  },
};
