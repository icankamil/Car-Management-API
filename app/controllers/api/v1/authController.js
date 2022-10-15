/**
 * @file contains request handler of post resource
 * @author Muhammad Insan Kamil
 */
 const authService = require("../../../services/authService");

 module.exports = {
    async login(req,res){
      const {user_name,password} = req.body;
      const authToken = req.headers.authorization;
      const vessel = await authService.login(user_name,password,authToken);
      res.status(202).send(vessel);
    },
    async createAdmin(req,res){
      const {user_name,password,full_name}=req.body;
      const authToken = req.headers.authorization.split(" ")[0];
      if(authToken=='Supersecret'){
      const key = req.route.path.split("/")[2];
      const vessel = await authService.createAdmin(user_name,password,full_name,key);
      res.status(200).json(vessel);
    }else{
      res.status(401).json({'message':"You are not authorized to create admin"});
    }
    },
    async createUsers(req,res){
      const {user_name,password,full_name}=req.body;
      const key = req.route.path.split("/")[2];
      const vessel = await authService.createUser(user_name,password,full_name,key);
      res.status(200).send(vessel)
    },
    async authentication(req,res,next){
      const authToken = req.headers.authorization;
      const result = await authService.getUser(authToken);
      req.vessel = result.full_name
      result.user_name ? next() : res.status(401).json({message:"unauthorized"});
    },
 };
 