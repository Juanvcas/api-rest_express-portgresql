'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const { DataTypes } = await import('sequelize');
    const { CUSTOMER_TABLE } = await import('../models/customers.model.js');
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    });
  },

  async down(queryInterface) {},
};
