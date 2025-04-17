import { sequelize } from '../../config/db.js';
import { DataTypes } from 'sequelize';
import Blog from './blog.js';

const BlogTag = sequelize.define(
  'blog_tag',
  {
    tag_name: {
      type: DataTypes.STRING
    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Blog,
        key: 'id'
      }
    }
  },
  {
    timestamps: false,
    tableName: 'blog_tag'
  }
);

BlogTag.belongsTo(Blog, {
  foreignKey: 'blog_id'
});
export default BlogTag;
