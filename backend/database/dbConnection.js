import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: DB_NAME });
    console.log("MongoDB connected successfully!!");
  } catch (error) {
    console.log(`Some Error occurred. ${error}`);
  }
};
