import express from "express";
import Dynasty from "../models/Dynasty.js";

const router = express.Router();

// GET all dynasties
router.get("/", async (req, res) => {
  try {
    const dynasties = await Dynasty.find().sort({ createdAt: 1 });
    res.status(200).json(dynasties);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch dynasties",
      error: error.message,
    });
  }
});

export default router;
