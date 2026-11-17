import "dotenv/config";
import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("db berhasil konek")
  } catch (error) {
    console.log("db error", error.message)
  }
}
