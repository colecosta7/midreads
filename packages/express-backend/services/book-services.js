import mongoose from "mongoose";
import ratingModel from "../models/book.mjs";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("debug", true);

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

//add services here

export default {

};