import * as studentRepo from "../repositories/studentRepo.js";
import * as marksRepo from "../repositories/marksRepo.js";

// ✅ Create Student
export async function createStudent(data) {
  // Basic Validation
  if (!data.name || !data.email || !data.age || !data.gender) {
    throw new Error("All fields are required.");
  }
  return await studentRepo.createStudent(data);
}

// ✅ Get Students with Pagination
export async function getAllStudents(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  const students = await studentRepo.getPaginatedStudents(skip, limit);
  const totalStudents = await studentRepo.getAllStudents(1, 10000); // Get total count
  return {
    students,
    totalStudents,
    totalPages: Math.ceil(totalStudents / limit) || 1,
    currentPage: page,
  };
}

// ✅ Get Student by ID with Marks
export async function getStudentById(studentId) {
  const student = await studentRepo.getStudentById(studentId);
  if (!student) throw new Error("Student not found.");
  const marks = await marksRepo.getMarksByStudentId(studentId);
  return { ...student.toObject(), marks };
}

// ✅ Update Student
export async function updateStudent(studentId, updateData) {
  return await studentRepo.updateStudent(studentId, updateData);
}

// ✅ Delete Student
export async function deleteStudent(studentId) {
  await marksRepo.deleteMarks(studentId); // Remove Marks before deleting Student
  return await studentRepo.deleteStudent(studentId);
}
