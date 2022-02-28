import express from "express";
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToPay,
} from "../controllers/orderController.js";
import { admin, protect } from "../middlewares/authMiddlerware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPay);
export default router;
