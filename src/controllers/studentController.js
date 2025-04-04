import * as studentService from "../services/studentService.js";

// ✅ Create Student
export async function createStudent(req, res) {
  try {
    const student = await studentService.createStudent(req.body);
    res.status(201).json({ success: true, student });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

// ✅ Get All Students (With Pagination)
export async function getAllStudents(req, res) {
  try {
    const { page = 1, limit = 10 } = req.query;
    const students = await studentService.getAllStudents(
      Number(page),
      Number(limit)
    );
    res.status(200).json({ success: true, ...students });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

// ✅ Get Student by ID (With Marks)
export async function getStudentById(req, res) {
  try {
    const student = await studentService.getStudentById(req.params.id);
    res.status(200).json({ success: true, student });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
}

// ✅ Update Student
export async function updateStudent(req, res) {
  try {
    const updatedStudent = await studentService.updateStudent(
      req.params.id,
      req.body
    );
    res.status(200).json({ success: true, updatedStudent });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

// ✅ Delete Student
export async function deleteStudent(req, res) {
  try {
    await studentService.deleteStudent(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Student deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
