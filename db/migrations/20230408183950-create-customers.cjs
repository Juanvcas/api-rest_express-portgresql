"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const { CUSTOMER_TABLE, CustomerSchema } = await import(
      "../models/customers.model.js"
    );
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down(queryInterface) {
    const { CUSTOMER_TABLE } = await import("../models/customers.model.js");
    await queryInterface.dropTable(CUSTOMER_TABLE);
  },
};
