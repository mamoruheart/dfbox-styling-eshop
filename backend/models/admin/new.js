import { sequelize } from '../../config/db.js';
import { DataTypes } from 'sequelize';

const New = sequelize.define(
  'news',
  {
    news_name: {
      type: DataTypes.STRING
    },
    post_by: {
      type: DataTypes.STRING
    },
    news_link: {
      type: DataTypes.STRING
    },
    news_image: {
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

export default New;
