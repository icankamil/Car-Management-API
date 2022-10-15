const express = require("express");
const controllers = require("../app/controllers");
const swaggerUi = require("swagger-ui-express");
const apiRouter = express.Router();
const swaggerDocument = require("../swagger_output.json");

/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument));
apiRouter.post("/api/login", controllers.api.v1.authController.login,(req,res)=>{
     /*  #swagger.parameters['body'] = {
                in: 'body',
                description: 'Request body of login',
                schema: {
                    $user_name: 'email',
                    $password: 'alphanumeric',
                }
        }
        #swagger.parameters['header'] = {
                name: 'Authorization',
                description: 'Authorization header of login containing JWT token with prefix bearer',
                in: 'header',
                type: 'string',
                schema: {
                    $Authorization: 'Jhon Doe',
                    $password: 29,
                }
        }
       */
});
apiRouter.post("/api/admins", controllers.api.v1.authController.authentication,controllers.api.v1.authController.createAdmin,(req,res)=>{
    /*  #swagger.parameters['body2'] = {
               in: 'body',
               description: 'Request body of login',
               schema: {
                   $user_name: 'email',
                   $password: 'alphanumeric',
                   $full_name: 'Human name',
                   $token:'Generated token',
               }
       }
       #swagger.parameters['header2'] = {
               name: 'Authorization',
               description: 'Authorization header of login containing JWT token with prefix bearer',
               in: 'header',
               type: 'string',
      */
});
apiRouter.post("/api/members/register", controllers.api.v1.authController.createUsers,(req,res)=>{
    /*  #swagger.parameters['body'] = {
               in: 'body',
               description: 'Request body of login',
               schema: {
                   $user_name: 'email',
                   $password: 'alphanumeric',
                   $full_name: 'Human name',
                   $token:'Generated token',
               }
       }
       #swagger.parameters['header'] = {
               name: 'Authorization',
               description: 'Authorization header of login containing JWT token with prefix bearer',
               in: 'header',
               type: 'string',
      */
});
apiRouter.get("/api/cars", controllers.api.v1.carController.getCars,(req,res)=>{
    /*  #swagger.parameters['body'] = {
               in: 'body',
               description: 'Request body of login',
               schema: {
                   $user_name: 'email',
                   $password: 'alphanumeric',
                   $full_name: 'Human name',
                   $token:'Generated token',
               }
       }
       #swagger.parameters['header'] = {
               name: 'Authorization',
               description: 'Authorization header of login containing JWT token with prefix bearer',
               in: 'header',
               type: 'string',
      */
});
apiRouter.post("/api/cars", controllers.api.v1.authController.authentication,controllers.api.v1.carController.postCars,(req,res)=>{
    /*  #swagger.parameters['body'] = {
               in: 'body',
               description: 'Request body of login',
               schema: {
                   $user_name: 'email',
                   $password: 'alphanumeric',
                   $full_name: 'Human name',
                   $token:'Generated token',
               }
       }
       #swagger.parameters['header'] = {
               name: 'Authorization',
               description: 'Authorization header of login containing JWT token with prefix bearer',
               in: 'header',
               type: 'string',
      */
});
apiRouter.get("/api/cars/:id",controllers.api.v1.authController.authentication, controllers.api.v1.carController.getSingleCars,(req,res)=>{
    /*  #swagger.parameters['body'] = {
               in: 'body',
               description: 'Request body of login',
               schema: {
                   $user_name: 'email',
                   $password: 'alphanumeric',
                   $full_name: 'Human name',
                   $token:'Generated token',
               }
       }
       #swagger.parameters['header'] = {
               name: 'Authorization',
               description: 'Authorization header of login containing JWT token with prefix bearer',
               in: 'header',
               type: 'string',
      */
});
apiRouter.put("/api/cars/:id",controllers.api.v1.authController.authentication, controllers.api.v1.carController.updateCars,(req,res)=>{
    /*  #swagger.parameters['body'] = {
               in: 'body',
               description: 'Request body of login',
               schema: {
                   $user_name: 'email',
                   $password: 'alphanumeric',
                   $full_name: 'Human name',
                   $token:'Generated token',
               }
       }
       #swagger.parameters['header'] = {
               name: 'Authorization',
               description: 'Authorization header of login containing JWT token with prefix bearer',
               in: 'header',
               type: 'string',
      */
});
apiRouter.put("/api/cars/:id/delete",controllers.api.v1.authController.authentication, controllers.api.v1.carController.deleteCars,(req,res)=>{
    /*  #swagger.parameters['body'] = {
               in: 'body',
               description: 'Request body of login',
               schema: {
                   $user_name: 'email',
                   $password: 'alphanumeric',
                   $full_name: 'Human name',
                   $token:'Generated token',
               }
       }
       #swagger.parameters['header'] = {
               name: 'Authorization',
               description: 'Authorization header of login containing JWT token with prefix bearer',
               in: 'header',
               type: 'string',
      */
});


apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
