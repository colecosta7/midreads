import mongoose from "mongoose";
import userModel from "./models/user.mjs";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));


function addUser(user) {
  const userToAdd = new userModel(user);
  const promise = userToAdd.save();
  return promise;
}

function getUser(name, password) {
  return userModel.find({ userName: name, password: password })
}

export default {
    addUser,
    getUser
};