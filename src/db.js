import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/tsc-backend');

    console.log("db berhasil konek")
  } catch (error) {
    console.log("db error")
  }
}