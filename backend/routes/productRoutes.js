import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import Products from "../models/productModel.js";

const router = express.Router();

router.get(
  "/",

  asyncHandler(async (req, res) => {
    let products = await Products.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not FOund" });
    }
  })
);

export default router;
