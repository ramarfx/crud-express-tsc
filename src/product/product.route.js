import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "./product.controller.js";

const router = Router();

router.get("/", getAllProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
