import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db.js";
import Culture from "../models/Culture.js";

dotenv.config();
await connectDB();

const cultures = [
  {
    title: "Traditional Ahom Dress",
    category: "Dress",
    description:
      "Traditional Tai Ahom attire was simple yet symbolic. Men typically wore cotton garments such as the chadar and dhoti, while women wore mekhela-style clothing. Natural dyes and handwoven fabrics were commonly used, reflecting harmony with nature.",
  },
];

const seedCulture = async () => {
  try {
    await Culture.deleteMany();
    await Culture.insertMany(cultures);
    console.log("Tai Ahom culture data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Error inserting culture data:", error);
    process.exit(1);
  }
};

seedCulture();
