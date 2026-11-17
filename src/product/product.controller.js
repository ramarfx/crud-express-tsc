import { Product } from "./product.model.js";

export const getAllProduct = async (req, res) => {
  try {
    const { name } = req.query;
    const filter = {};
    
    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }
    
    const products = await Product.find(filter);

    res.json({
      message: "product berhasil diambil",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      data: error,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { body } = req;
    const product = await Product.create(body);

    res.status(201).json({
      message: "product berhasil dibuat",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      data: null,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const product = await Product.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!product) {
      res.status(404).json({
        message: "product tidak ditemukan",
        data: null,
      });
    }

    res.status(201).json({
      message: "product berhasil diupdate",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      data: null,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const product = await Product.findByIdAndDelete(id, body);

    if (!product) {
      res.status(404).json({
        message: "product tidak ditemukan",
        data: null,
      });
    }

    res.status(200).json({
      message: "product berhasil dihapus",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      data: null,
    });
  }
};
