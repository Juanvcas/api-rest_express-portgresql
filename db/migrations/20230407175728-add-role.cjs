"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const { USER_TABLE, UserSchema } = await import("../models/users.model.js");
    await queryInterface.addColumn(USER_TABLE, "uname", UserSchema.uname);
    await queryInterface.addColumn(USER_TABLE, "role", UserSchema.role);
  },

  async down(queryInterface) {
    const { USER_TABLE } = await import("../models/users.model.js");
    await queryInterface.removeColumn(USER_TABLE, "uname");
    await queryInterface.removeColumn(USER_TABLE, "role");
  },
};
