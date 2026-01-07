import express from "express";
import Culture from "../models/Culture.js";

const router = express.Router();

// GET all culture data
router.get("/", async (req, res) => {
  try {
    const cultures = await Culture.find();
    res.json(cultures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

