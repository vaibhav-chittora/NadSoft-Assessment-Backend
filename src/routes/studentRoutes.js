import express from "express";
import * as studentController from "../controllers/studentController.js";

const router = express.Router();

// ✅ Create Student
router.post("/", studentController.createStudent);

// ✅ Get All Students (With Pagination)
router.get("/", studentController.getAllStudents);

// ✅ Get Single Student by ID (With Marks)
router.get("/:id", studentController.getStudentById);

// ✅ Update Student
router.put("/:id", studentController.updateStudent);

// ✅ Delete Student
router.delete("/:id", studentController.deleteStudent);

export default router;
