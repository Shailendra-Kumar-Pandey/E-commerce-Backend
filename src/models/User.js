import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      minlength: 5,
      required: true,
    },
    email:{
        ty
    }
  },
  {
    timestamps: true,
  },
);
