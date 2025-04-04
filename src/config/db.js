import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

async function connectDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
}

export default connectDB;
