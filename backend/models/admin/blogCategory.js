import { sequelize } from '../../config/db.js';
import { DataTypes } from 'sequelize';

const BlogCategory = sequelize.define(
  'blog_category',
  {
    category_name: {
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
    timestamps: false,
    tableName: 'blog_category'
  }
);

export default BlogCategory;
