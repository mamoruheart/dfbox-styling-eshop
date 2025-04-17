import { sequelize } from '../../config/db.js';
import { DataTypes } from 'sequelize';

const Employee = sequelize.define(
  'sup_employee',
  {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    about: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    is_active: {
      type: DataTypes.NUMBER
    },
    created: {
      type: DataTypes.DATE
    }
  },
  {
    timestamps: false
  }
);

export default Employee;
