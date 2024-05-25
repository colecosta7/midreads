import mongoose from "mongoose";
import userModel from "../models/user.mjs";
import bookModel from "../models/book.mjs";
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
  if(user.library.includes(book._id)) {
    return undefined;
  } else {
    return userModel.updateOne(
      { uid: uid },
      { $push: { library: book._id } }
    );
  }   
}

async function getUserLibrary(uid) {
  let user = await userModel.findOne({ uid: uid });

  let library = await Promise.all(user.library.map(bookId => bookModel.findById(bookId)));
  
  //let library = [];
  //for(let i = 0; i < user.library.length; i++) {
  //  library.push(bookModel.findById(user.library[i]));
  //}
  //console.log(library);
  return library;
}

async function getCountLibrary(uid) {
  let user = await userModel.findOne({ uid: uid});
  let count = user.library.length;
  return count;
}

async function getCountTotalPages(uid) {
  let user = await userModel.findOne({ uid: uid});
  let books = getUserLibrary(uid)
  let pages = (await books).reduce((sum, book) => sum + book.numPages, 0);
  return pages

}

async function updateFriends(uid, friend) {
  let user = await userModel.findOne({ uid: uid })
  let friendObj = await userModel.findOne({userName: friend});
  if(friendObj === null) {
    return undefined;
  }
  if(user.friends.includes(friendObj._id)) {
    return undefined;
  } else {
    return userModel.updateOne(
      { uid: uid },
      { $push: { friends: friendObj } }
    );
  }   
}


export default {
    addUser,
    getUser,
    updateReadLater,
    updateLibrary,
    getUserLibrary,
    getCountLibrary,
    getCountTotalPages,
    updateFriends
};