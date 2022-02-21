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

// @desc    Create a product
// @route   POST /api/products/
// @access  private/admin

export const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample Product",
    price: 0,
    user: req.user._id,
    image1: "/images/sample.jpg",
    image2: "/images/sample.jpg",
    image3: "/images/sample.jpg",
    image4: "/images/sample.jpg",
    brand: "sample brand",
    category: "sample Category",
    gender: "male",
    description: "Sample...",
    numReviews: 0,
    countInStock: 0,
    type: "casuals",
  });

  const createdProduct = await product.save();
  res.statusMessage(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  private/admin

export const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image1,
    image2,
    image3,
    image4,
    brand,
    category,
    countInStock,
    type,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image1 = image1;
    product.image2 = image2;
    product.image3 = image3;
    product.image4 = image4;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    product.type = type;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
