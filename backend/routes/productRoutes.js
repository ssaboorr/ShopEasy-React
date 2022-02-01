import express from "express";
import asyncHandler from "express-async-handler";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";
import Product from "../models/productModel.js";
import Products from "../models/productModel.js";

const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
