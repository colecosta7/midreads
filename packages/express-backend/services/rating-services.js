import mongoose from "mongoose";
import ratingModel from "../models/rating.mjs";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));


function addRating(rating) {
  const ratingToAdd = new ratingModel(rating);
  const promise = ratingToAdd.save();
  return promise;
}

function getRating(by, about) {
  return ratingModel.find({ by: by, about: about })
}

function getAllRatingsAbout(about) {
    return ratingModel.find({about: about })
}

function getAllRatingsBy(by) {
    return ratingModel.find({by: by})
}

export default {
    addRating,
    getRating,
    getAllRatingsAbout,
    getAllRatingsBy
};