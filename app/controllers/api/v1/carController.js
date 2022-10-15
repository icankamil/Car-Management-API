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
        res.json({
            data: {cars:data},
            count: {total:count},
        });
    }).catch((err) => {
        res.send(err)
    })
   },
postCars(req,res){
    const {name,color,transmission,deleted,deleted_at}=req.body;
    const user = req.vessel
    console.log(user)
    const token = req.headers.authorization;
    return res.send(carService.create(name,color,transmission,deleted,deleted_at,token,user));
 },
 async getSingleCars(req,res){
    const id=req.params.id;
    return res.json(await carService.get(id));
 },

 updateCars(req,res){
    const id = req.params.id;
    carService.update(id,req.body,req.vessel).then(result => res.json({message:'Successfully update car data'})).catch(err=>res.json(err))
 },

deleteCars(req,res){
    const id = req.params.id;
    carService.delete(id,req.vessel).then(result => res.json({message:'Successfully deleted car data'})).catch(err=>res.json(err))
 },
 };
 