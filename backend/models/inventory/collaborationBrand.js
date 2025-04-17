import { sequelize } from '../../config/db.js';
import { DataTypes } from 'sequelize';

const invCollaborationBrand = sequelize.define(
  'in_collaboration_brand',
  {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    brand_name: {
      type: DataTypes.STRING
    },
    website: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  }
);

export default invCollaborationBrand;
