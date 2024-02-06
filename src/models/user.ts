import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, default: null },
  email: { type: String, unique: true, default: null },
  password: { type: String, default: null },
  token: { type: String },
});

export const userModel = model("User", userSchema);
