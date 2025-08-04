import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";
import { upload } from "../middleware/multer.js"; // Import multer middleware

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

// Multer used here to handle multipart/form-data for image uploads
router.post("/send/:id", protectRoute, upload.single("image"), sendMessage);

export default router;
