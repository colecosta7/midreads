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

function updateRating(by, about, rating) {
  return ratingModel.updateOne(
    { by: by, about: about }, 
    { $set: { rating: rating } } 
  );
}


function getRating(by, bookId) {
  return ratingModel.find({ by: by, about: bookId })
}

function getAllRatingsAbout(bookID) {
  return ratingModel.find({about: bookID })
}

function getAllRatingsBy(userID) {
  return ratingModel.find({by: userID})
}

function averageRatingFor(bookID) {
  const promise = ratingModel.find({about: bookID});

  promise.then((matchingEntries) => {
    if (matchingEntries == 0) {
      return undefined
    } else {
      const sum = matchingEntries.reduce((total, entry) => total + entry.rating, 0);
      const average = sum / matchingEntries.length;
      return average;
    }
  }).catch((error) => {console.log(error)});
}

export default {
    addRating,
    getRating,
    getAllRatingsAbout,
    getAllRatingsBy,
    averageRatingFor,
    updateRating
};