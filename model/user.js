import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  avatar: String,
  email: { type: String, unique: true },
  phone: { type: String, unique: true },
  date: Date,
});

const Users = models.user || model("user", userSchema);

export default Users;
