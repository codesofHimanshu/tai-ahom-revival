import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import dynastyRoutes from "./routes/dynastyRoutes.js";
import cultureRoutes from "./routes/cultureRoutes.js";
import heritageRoutes from "./routes/heritageRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/dynasties", dynastyRoutes);
app.use("/api/culture", cultureRoutes);
app.use("/api/heritage", heritageRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Tai Ahom Revival Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



