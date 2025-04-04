import express from "express";
import studentRoutes from "./studentRoutes.js";
import marksRoutes from "./marksRoutes.js";

const router = express.Router();

// ✅ Student Routes → /api/students
router.use("/students", studentRoutes);

// ✅ Marks Routes → /api/marks
router.use("/marks", marksRoutes);

export default router;
