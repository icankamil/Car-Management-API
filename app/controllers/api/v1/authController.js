/**
 * @file contains request handler of post resource
 * @author Muhammad Insan Kamil
 */
 const authService = require("../../../services/authService");

 module.exports = {
    async login(req,res){
      const {user_name,password} = req.body;
      const authToken = req.headers.authorization;
      authService.login(user_name,password,authToken).then(result=>{
        typeof result == typeof "string" ? res.status(200).send(result):res.status(400).json(`${result}`);
       })
    },
    async createAdmin(req,res){
      const {user_name,password,full_name}=req.body;
      const authToken = req.headers.authorization.split(" ")[0];
      if(authToken=='Supersecret'){
      const key = req.route.path.split("/")[2];
      authService.createAdmin(user_name,password,full_name,key).then(result=>{
       typeof result == typeof "string" ? res.status(200).send(result):res.status(400).json(`${result}`);
      })
    }else{
      res.status(401).json({'message':"You are not authorized to create admin"});
    }
    },
    async createUsers(req,res){
      const {user_name,password,full_name}=req.body;
      const key = req.route.path.split("/")[2];
      authService.createUser(user_name,password,full_name,key).then(result=>{
        typeof result == typeof "string" ? res.status(200).send(result):res.status(400).json(`${result}`);
       });
    },
    async authentication(req,res,next){
      const authToken = req.headers.authorization;
      const result = await authService.getUser(authToken);
      req.vessel = result.full_name
      result.user_name ? next() : res.status(401).json({message:"unauthorized"});
    },
   whoami(req,res){
      const authToken = req.headers.authorization;
      authService.getMe(authToken).then(result=>{
        result.user_name? res.status(200).json(result):res.status(400).send(result);
      })
    },
 };
 