import dotenv from "dotenv";
import connectDB from "./db.js";
import Heritage from "../models/Heritage.js";

dotenv.config();
connectDB();

const heritageData = [
  {
    title: "Charaideo Maidams",
    location: "Charaideo, Assam",
    description:
      "The royal burial mounds of the Ahom kings, often compared to the pyramids of Egypt.",
  },
  {
    title: "Talatal Ghar",
    location: "Sivasagar, Assam",
    description:
      "A grand palace built by Ahom king Swargadeo Rajeswar Singha, showcasing advanced architecture.",
  },
];

const seedHeritage = async () => {
  try {
    await Heritage.deleteMany();
    await Heritage.insertMany(heritageData);
    console.log("Tai Ahom heritage data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Error inserting heritage data:", error);
    process.exit(1);
  }
};

seedHeritage();
