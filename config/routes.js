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
apiRouter.get("/api/whoami", controllers.api.v1.authController.whoami);
apiRouter.post("/api/login", controllers.api.v1.authController.login);
apiRouter.post("/api/admins", controllers.api.v1.authController.authentication,controllers.api.v1.authController.createAdmin);
apiRouter.post("/api/members/register", controllers.api.v1.authController.createUsers);
apiRouter.get("/api/cars", controllers.api.v1.carController.getCars);
apiRouter.post("/api/cars", controllers.api.v1.authController.authentication,controllers.api.v1.carController.postCars);
apiRouter.get("/api/cars/:id",controllers.api.v1.authController.authentication, controllers.api.v1.carController.getSingleCars);
apiRouter.put("/api/cars/:id",controllers.api.v1.authController.authentication, controllers.api.v1.carController.updateCars);
apiRouter.put("/api/cars/:id/delete",controllers.api.v1.authController.authentication, controllers.api.v1.carController.deleteCars);


apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
