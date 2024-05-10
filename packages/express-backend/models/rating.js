import mongoose from "mongoose";
import userModel from "./user.js";
import bookModel from "./book.js";

const RatingSchema = new mongoose.Schema(
  {
    by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    about: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true
    },
    rating: {
        type: Number,
        required: true
    }
  },
  { collection: "ratings_list" }
);

const Rating = mongoose.model("Rating", RatingSchema);

export default User;