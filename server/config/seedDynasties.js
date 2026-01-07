import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db.js";
import Dynasty from "../models/Dynasty.js";

dotenv.config();
await connectDB();

const dynasties = [
  {
    name: "Ahom Dynasty",
    period: "1228 CE – 1826 CE",
    founder: "Chaolung Sukaphaa",
    capital: "Charaideo",
    description:
      "The Ahom Dynasty was a powerful Tai-origin kingdom that ruled Assam for nearly 600 years. Founded by Chaolung Sukaphaa in 1228 CE, the Ahoms successfully resisted Mughal invasions and developed a unique administrative, military, and cultural system blending Tai and indigenous traditions.",
  },
];

const seedData = async () => {
  try {
    await Dynasty.deleteMany();
    await Dynasty.insertMany(dynasties);
    console.log("Tai Ahom dynasty data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Error inserting dynasty data:", error);
    process.exit(1);
  }
};

seedData();
