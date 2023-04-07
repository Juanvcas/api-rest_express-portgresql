'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const { USER_TABLE, UserSchema } = await import('../models/users.model.js');
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface) {
    const { USER_TABLE } = await import('../models/users.model.js');
    await queryInterface.drop(USER_TABLE);
  },
};
