import express from "express";
import { authUser, getUserProfile } from "../controllers/userController.js";
import {protect} from '../middlewares/authMiddlerware.js'
1
const router = express.Router();


router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
