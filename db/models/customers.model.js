import { Model, DataTypes, Sequelize } from 'sequelize';

import { USER_TABLE } from './users.model.js';

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  fname: {
    field: 'first_name',
    type: DataTypes.STRING,
    allowNull: false,
  },
  lname: {
    fiels: 'last_name',
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: true,
  },
  userId: {
    field: 'user_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Customer extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    };
  }
}

export { CUSTOMER_TABLE, CustomerSchema, Customer };
