import { sequelize } from '../../config/db.js';
import { DataTypes } from 'sequelize';

const SupplyVendor = sequelize.define(
  'supply_vendor',
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
    about: {
      type: DataTypes.STRING
    },
    address_one: {
      type: DataTypes.STRING
    },
    address_two: {
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

export default SupplyVendor;
