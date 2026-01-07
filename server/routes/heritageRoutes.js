import express from "express";
import Heritage from "../models/Heritage.js";

const router = express.Router();

// GET all heritage items
router.get("/", async (req, res) => {
  try {
    const heritage = await Heritage.find();
    res.json(heritage);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch heritage data" });
  }
});

export default router;
