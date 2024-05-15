import mongoose from "mongoose";
import userModel from "./user.mjs";
import bookModel from "./book.mjs";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    booksRead: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      default: []
    }],
    booksToRead: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      default: []
    }],
    bio: {
        type: String,
        default: ""
    },
    friends: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: []
    }],
    photo: {
       type: String,
       default: '../Default_pfp.jpg'
    }
  },
  { collection: "users_list" }
);

const User = mongoose.model("User", UserSchema);

export default User;