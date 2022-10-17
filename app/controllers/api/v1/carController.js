/**
 * @file contains request handler of post resource
 * @author Muhammad Insan Kamil
 */
 const car = require("../../../models/car");
const carService = require("../../../services/carService");
const authService = require("../../../services/authService");

 module.exports = {
   getCars(req, res) {
    carService.list().then(({data,count}) => {
        res.status(200).json({
            data: {cars:data},
            count: {total:count},
        });
    }).catch((err) => {
        res.status(400).send(err)
    })
   },
postCars(req,res){
    const {name,color,transmission,deleted,deleted_at}=req.body;
    const user = req.vessel
    carService.create(name,color,transmission,deleted,deleted_at,user).then(result=>{
        typeof result == typeof "string"?res.status(200).send(result):res.status(400).json(`${result}`);
    }); 
 },
 async getSingleCars(req,res){
    const id=req.params.id;
    return carService.get(id).then(result=>{
        typeof result == typeof "string"?res.status(400).json(`${result}`) : res.status(200).json(result);
    });
 },

 updateCars(req,res){
    const id = req.params.id;
    carService.update(id,req.body,req.vessel).then(result => res.status(200).json({message:'Successfully update car data'})).catch(err=>res.status(400).json(err))
 },

deleteCars(req,res){
    const id = req.params.id;
    carService.delete(id,req.vessel).then(result => 
        typeof result == typeof "" ? res.status(200).json({message:result}):res.status(400).json(result))
 },
 };
 