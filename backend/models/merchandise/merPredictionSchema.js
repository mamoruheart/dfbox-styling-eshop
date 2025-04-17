import mongoose from 'mongoose';

const merPredictionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    subs: {
      type: String
    },
    type: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default merPredictionSchema;
