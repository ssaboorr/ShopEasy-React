import asyncHandler from "express-async-handler";

import Product from "../models/productModel.js";

export const getProducts = asyncHandler(async (reg, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  private/admin

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product Not found");
  }
});
