import express from "express";
import { authUser, getUserProfile, registerUser } from "../controllers/userController.js";
import {protect} from '../middlewares/authMiddlerware.js'
1
const router = express.Router();

router.route('/').post(registerUser)
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
