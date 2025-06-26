import express from "express";
import bcrypt from "bcrypt";
import { useStreakSaver } from '../controllers/userController.js';

import User from "../models/userModel.js";
import {
  createUser,
  getUserById,
  updateUser,
  signIn,
  saveProgress,
  getProgress,
  getLeaderboard
} from "../controllers/userController.js";

import videoRoutes from "./videoRoutes.js";
import locationRoutes from "./locationRoutes.js"; // ✅ NEW

const router = express.Router();

// ✅ VIDEO ROUTES
router.use("/videos", videoRoutes);

// ✅ GEOLOCATION TRACKER ROUTES
router.use("/location", locationRoutes); // ✅ NEW

// ✅ USER & COURSE ROUTES
router.post("/users", createUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      progress: [],
      streak: {
        currentStreak: 1,
        longestStreak: 1,
        streakSaversUsed: 0,
        lastActiveDate: new Date(),
      },
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});

router.post("/login", signIn);
router.post("/progress", saveProgress);
router.get("/progress/:userId/:courseId", getProgress);
router.get("/leaderboard", getLeaderboard);
router.post("/streak-saver", useStreakSaver);

export default router;
