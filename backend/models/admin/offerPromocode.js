import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db.js';

const OfferPromocode = sequelize.define(
  'offer_promocode',
  {
    code: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.NUMBER
    },
    minimum_purchase: {
      type: DataTypes.NUMBER
    },
    comments: {
      type: DataTypes.STRING
    },
    expiry_date: {
      type: DataTypes.DATE
    },
    created_dt: {
      type: DataTypes.DATE
    },
    is_active: {
      type: DataTypes.NUMBER
    }
  },
  {
    timestamps: false,
    tableName: 'offer_promocode'
  }
);

export default OfferPromocode;
