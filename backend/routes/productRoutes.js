import express from "express";
import asyncHandler from "express-async-handler";
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
    try {
      const product = await Products.findById(req.params.id);

      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: "Product Not Found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Errrroooooeeeeeeerrrrr" });
    }
  })
);

// router.get(
//   "/product/:id",
//   asyncHandler(async (req, res) => {
//     try {
//       const product = await Products.findById(req.params.id);

//       if (product) {
//         res.json(product);
//       } else {
//         res.status(404).json({ message: "Product Not Found" });
//       }
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: "Errrroooooeeeeeeerrrrr" });
//     }
//   })
// );

// router.get(
//   "/fashion",
//   asyncHandler(async (req, res) => {
//     let products = await Products.find(prod => prod.type === 'fashion');
//     // products = products.filter((prod) => prod.type === "fashion");
//     res.json(products);
//   })
// );

export default router;
