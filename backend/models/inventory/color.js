import { sequelize } from '../../config/db.js';
import { DataTypes } from 'sequelize';

const InvColor = sequelize.define(
  'in_colors',
  {
    name: {
      type: DataTypes.STRING,
      required: true,
      unique: true
    },
    is_active: {
      type: DataTypes.NUMBER
    }
  },
  {
    timestamps: false
  }
);

export default InvColor;
