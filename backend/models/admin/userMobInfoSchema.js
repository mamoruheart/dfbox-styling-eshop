import mongoose from 'mongoose';

const userMobInfoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    platform: {
      type: String,
      enum: ['ios', 'android', 'mobileweb']
    },
    udid: {
      type: String
    },
    deviceToken: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default userMobInfoSchema;
