import { sequelize } from '../../config/db.js';
import { DataTypes } from 'sequelize';

const Influencer = sequelize.define(
  'influencer',
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
    link: {
      type: DataTypes.STRING
    },
    note: {
      type: DataTypes.STRING
    },
    created_on: {
      type: DataTypes.DATE
    },
    uniq_id: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  }
);

export default Influencer;
