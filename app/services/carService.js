const carRepository = require("../repositories/carRepository");
const recordRepository = require("../repositories/recordRepository");
const jwt = require("jsonwebtoken");
const { json } = require("sequelize");
module.exports = {
  create(a,b,c,d,e,g) {
        const message= `Successfully created car with name ${a}, created by ${g} at ${new Date()}`;
        let hasil;
        return carRepository.create(a,b,c,d=0,e).then((result)=>{
          let vessel
          vessel = result.dataValues
          recordRepository.create(message,vessel.id).then((result)=>{
            return JSON.stringify({'message':message});
          }).catch((err)=>{
            return Error(err);
          })
          return hasil = JSON.stringify({'message':message});
        }).catch(err=>{
          return hasil = Error(err);
        })
  },

  async update(id, requestBody,c) {
    const message= `Successfully Updated car, updated by ${c} at ${new Date()}`;
    await recordRepository.create(message,id);
    return carRepository.update(id, requestBody);
  },

  async delete(id,c) {
    const message= `Successfully Deleted car, deleted by ${c} at ${new Date()}`;
    recordRepository.create(message,id).then(result=>{
      return "success delete";
    });
    return carRepository.updateDelete(id, 1).then(result=>{
      return JSON.stringify({'message':message});
    }).catch(err=>{
      return Error(err);
    });
  },

  async list() {
    try {
      const posts = await carRepository.findAll();
      const postCount = await carRepository.getTotalCar();
      if(posts.length < 1){
        return {
          data: "There is no car yet",
          total: 0,
        };
      }else{
      return {
        data: posts,
        count: postCount,
      }
    }
    } catch (err) {
      throw err;
    }
  },

  get(id) {
    return carRepository.find(id).then(result=>{
      if(result == null){
        return "There is no car with that id";
      }else{
        return result;
      }
    });
  },
};
