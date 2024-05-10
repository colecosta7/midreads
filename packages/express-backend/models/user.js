import mongoose from "mongoose";
import userModel from "./user.js";
import bookModel from "./book.js";

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
    booksRead: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book' 
    }],
    booksToRead: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book' 
    }],
    bio: {
        type: String,
        default: ""
    },
    friends: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' 
    }],
    photo: {
        data: Buffer, // Binary data of the image
        contentType: String // MIME type of the image (e.g., image/jpeg, image/png)
    }
  },
  { collection: "users_list" }
);

const User = mongoose.model("User", UserSchema);

export default User;