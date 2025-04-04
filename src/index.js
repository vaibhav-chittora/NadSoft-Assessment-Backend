import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import routes from "./routes/apiRouter.js";
import { PORT } from "./config/serverConfig.js";

// Initialize Express App
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api", routes);

// Health Check Route
app.get("/api/health-check", (req, res) => {
  res.status(200).json({ message: "API is running successfully!" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  // Connect to MongoDB
  connectDB();
});
