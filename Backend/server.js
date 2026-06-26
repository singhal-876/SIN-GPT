import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: ["https://sin-gpt.onrender.com"],
  }),
);

app.use("/api", chatRoutes);

app.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`);
  connectDB();
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection with DB sucessfull!!!");
  } catch (err) {
    console.log("Failed to connect with DB!!!", err);
  }
};