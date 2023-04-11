"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const { PRODUCT_TABLE, ProductSchema } = await import(
      "../models/products.model.js"
    );
    const { CATEGORY_TABLE, CategorySchema } = await import(
      "../models/categories.model.js"
    );
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  async down(queryInterface) {
    const { PRODUCT_TABLE } = await import("../models/products.model.js");
    const { CATEGORY_TABLE } = await import("../models/categories.model.js");
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  },
};
