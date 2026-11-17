import express from "express";
import { connectDB } from "./db.js";
import productRoute from "./product/product.route.js"

const app = express();
const port = 3000;

connectDB()

app.use(express.json())

app.use('/product', productRoute)

app.listen(port, () => {
  console.log(`listen on http://localhost:${port}`);
});
