import mongoose from "mongoose";

const dynastySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    period: {
      type: String,
      required: true,
    },
    founder: {
      type: String,
    },
    capital: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Dynasty = mongoose.model("Dynasty", dynastySchema);

export default Dynasty;
