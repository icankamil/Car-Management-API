const carRepository = require("../repositories/carRepository");
const recordRepository = require("../repositories/recordRepository");
const jwt = require("jsonwebtoken");
module.exports = {
  create(a,b,c,d,e,f,g) {
    try{
      let tokenPayload = false
      const bearerToken = f.split(" ")[1];
      const getPrefix = f.split(bearerToken)[0];
      const prefix = getPrefix.replace(/\s/g, '')
      if(prefix == "Supersecret" || prefix == "admins"){
      tokenPayload = jwt.verify(
        bearerToken,
        process.env.JWT_SIGNATURE_KEY || prefix
      );
      }
      if(tokenPayload){
        const message= `Successfully created car with name ${a}, created by ${g} at ${new Date()}`;
        carRepository.create(a,b,c,d,e).then((result)=>{
          const vessel = result.dataValues
          recordRepository.create(message,vessel.id).then((result)=>{
            return JSON.stringify({'message':message});
          }).catch((err)=>{
            return JSON.stringify({'message':`${err}`});
          })
        });
        recordRepository.create(message);
        return JSON.stringify({
          'message':`Car created! with name ${a}`
        })
      }else{
        return JSON.stringify({
          'message':'You are not permitted to create car!'
        })
      }
  }catch(err){
    return JSON.stringify({
      'message':`${err}`
    })
  }
  },

  async update(id, requestBody,c) {
    const message= `Successfully Updated car, updated by ${c} at ${new Date()}`;
    await recordRepository.create(message,id);
    return carRepository.update(id, requestBody);
  },

  async delete(id,c) {
    const message= `Successfully Deleted car, deleted by ${c} at ${new Date()}`;
    await recordRepository.create(message,id);
    return carRepository.updateDelete(id, 1);
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
    return carRepository.find(id);
  },
};
