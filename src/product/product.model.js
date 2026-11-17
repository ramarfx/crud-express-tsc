import mongoose from "mongoose";

export const Product = mongoose.model('product', {
  name: String,
  price: Number,
  stock: Number
})

