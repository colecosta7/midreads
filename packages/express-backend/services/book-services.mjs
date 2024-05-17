import mongoose from "mongoose";
import bookModel from "../models/book.mjs";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

function addBook(book) {
  const bookToAdd = new bookModel(book);
  const promise = bookToAdd.save();
  return promise;
}
  
function findBooksWithSubstring(substring, startIndex, endIndex) { //will find all books containing substring, use for search
  const promise = bookModel.find({ title: { $regex: substring, $options: 'i' } }).skip(startIndex)
  .limit(endIndex - startIndex);
  return promise;
}

function findCountOfBooksWithSubstring(substring) {
  const promise = bookModel.countDocuments({ title: { $regex: substring, $options: 'i' } })
  return promise;
}

export default {
  addBook,
  findBooksWithSubstring,
  findCountOfBooksWithSubstring
};