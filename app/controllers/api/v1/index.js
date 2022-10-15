/**
 * @file contains entry point of controllers api v1 module
 * @author Muhammad Insan Kamil
 */

 const authController = require("./authController");
 const carController = require("./carController");

 module.exports = {
   authController,
   carController
 };
 