import { sequelize } from '../../config/db.js';
import { DataTypes } from 'sequelize';

const Page = sequelize.define(
  'pages',
  {
    name: {
      type: DataTypes.STRING
    },
    page_title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    meta_keyword: {
      type: DataTypes.STRING
    },
    meta_title: {
      type: DataTypes.STRING
    },
    meta_description: {
      type: DataTypes.STRING
    },
    is_active: {
      type: DataTypes.NUMBER
    },
    created: {
      type: DataTypes.TIME
    },
    modified: {
      type: DataTypes.TIME
    }
  },
  {
    timestamps: false
  }
);

export default Page;
