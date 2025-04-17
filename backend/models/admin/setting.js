import { sequelize } from '../../config/db.js';
import { DataTypes } from 'sequelize';

const Setting = sequelize.define(
  'setting',
  {
    name: {
      type: DataTypes.STRING
    },
    value: {
      type: DataTypes.STRING
    },
    display: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.INTEGER
    },
    is_active: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: false
  }
);

export default Setting;
