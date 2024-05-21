import mongoose from "mongoose";
import userModel from "../models/user.mjs";
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

function getUser(uid) {
  return userModel.find({ uid: uid })
}

async function updateReadLater(uid, book) {
  let user = await userModel.findOne({ uid: uid })
  console.log(user);
  if(user.booksToRead.includes(book._id)) {
    return undefined;
  } else {
    return userModel.updateOne(
      { uid: uid },
      { $push: { booksToRead: book._id } }
    );
  }   
}

async function updateLibrary(uid, book) {
  let user = await userModel.findOne({ uid: uid })
  console.log(user);
  if(user.library.includes(book._id)) {
    return undefined;
  } else {
    return userModel.updateOne(
      { uid: uid },
      { $push: { library: book._id } }
    );
  }   
}


export default {
    addUser,
    getUser,
    updateReadLater,
    updateLibrary
};