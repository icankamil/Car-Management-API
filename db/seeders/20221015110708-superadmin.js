'use strict';
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return await queryInterface.bulkInsert('users', [{
      user_name: 'superadmin@mail.com',
      password: await bcrypt.hash('getcloser',7),
      full_name: 'Super Ican',
      token: await jwt.sign({user_name: 'superadmin@mail.com',password: bcrypt.hash('getcloser',7),full_name: 'Super Ican'},'Supersecret'),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
