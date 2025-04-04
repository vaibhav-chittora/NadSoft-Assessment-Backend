import express from "express";
import * as marksController from "../controllers/marksController.js";

const router = express.Router();

// ✅ Add Marks
router.post("/", marksController.addMarks);

// ✅ Get Marks by Student ID
router.get("/:studentId", marksController.getMarksByStudentId);

// ✅ Update Marks
router.put("/:id", marksController.updateMarks);

// ✅ Delete Marks
router.delete("/:id", marksController.deleteMarks);

export default router;
