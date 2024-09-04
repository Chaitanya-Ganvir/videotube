import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(connectionInstance.connection.host);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
export default connectDB;
