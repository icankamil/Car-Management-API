const authRepository = require("../repositories/userRepository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
module.exports = {
async login(a,b,c){
    try{
      const user_name = a;
      const bearerToken = c.split(" ")[1];
      const getPrefix = c.split(bearerToken)[0];
      const user = await authRepository.find(user_name,bearerToken);
      const password = await bcrypt.compare(b,user.password);
      const prefix = getPrefix.replace(/\s/g, '')
      const tokenPayload = jwt.verify(
        bearerToken,
        process.env.JWT_SIGNATURE_KEY || prefix
      );
        if(password == true && tokenPayload){

        return JSON.stringify({'message':`Welcome ${user.full_name}, please save the token somewhere else to include in another transaction`,'credential':user.user_name,'token':user.token});
     } else {
           return JSON.stringify({'message':'You are not verified user!'});
        }
     }catch(err){
       return err != null? JSON.stringify({'message':`${err}` }):JSON.stringify({'message':'your credential is not valid'});
     }
},
async createAdmin(a,b,c,d){
   try{
    const encrypted = await bcrypt.hash(b,7);
    const token = jwt.sign({user_name:a,password:encrypted,full_name:c},`${d}`);
    await authRepository.create(a,encrypted,c,token);
    return JSON.stringify({'message':`Admin created! with credential ${a} and token ${token}`});
   }
   catch(err){
        return JSON.stringify({'message':`${err}`});
   }
},
async createUser(a,b,c,d){
   try{
    const encrypted = await bcrypt.hash(b,7);
    const token = jwt.sign({user_name:a,password:encrypted,full_name:c},`${d}`);
    await authRepository.create(a,encrypted,c,token);
    return JSON.stringify({'message':`Users created! with credential ${a} and token ${token}`});
   }
   catch(err){
        return JSON.stringify({'message':`${err}`});
   }
},
async getUser(a){
   try{
     const bearerToken = a.split(" ")[1];
     const getPrefix = a.split(bearerToken)[0];
     const user = await authRepository.findToken(bearerToken);
     const prefix = getPrefix.replace(/\s/g, '')
     if(prefix == "Supersecret" || prefix == "admins"){
     const tokenPayload = jwt.verify(
       user.token,
       process.env.JWT_SIGNATURE_KEY || prefix
     );
     return user;
      }else{
         return JSON.stringify({'message':'You arent permitted to get user!'});
      }
    }catch(err){
      return err != null? JSON.stringify({'message':`${err}` }):JSON.stringify({'message':'your credential is not valid'});
    }
},
};
