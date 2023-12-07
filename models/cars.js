import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

export const car = mongoose.model("car", carSchema);
