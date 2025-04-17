import { sequelize } from '../../config/db.js';
import { DataTypes } from 'sequelize';
import User from '../admin/user.js';

const WomenShoePrefer = sequelize.define(
  'women_shoe_prefer',
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    brands: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
    tableName: 'women_shoe_prefer'
  }
);

WomenShoePrefer.belongsTo(User, {
  foreignKey: 'user_id'
});

export default WomenShoePrefer;
