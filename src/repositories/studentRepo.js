import Student from "../models/student.js";

// ✅ Create Student
export async function createStudent(data) {
  return await Student.create(data);
}

// ✅ Get All Students (With Pagination)
export async function getAllStudents(page, limit) {
  const skip = (page - 1) * limit;
  return await Student.find().skip(skip).limit(limit);
}

// ✅ Get Single Student by ID (With Marks Populated)
export async function getStudentById(studentId) {
  return await Student.findById(studentId).populate("marks");
}

// ✅ Update Student
export async function updateStudent(studentId, updateData) {
  return await Student.findByIdAndUpdate(studentId, updateData, { new: true });
}

// ✅ Delete Student
export async function deleteStudent(studentId) {
  return await Student.findByIdAndDelete(studentId);
}

// ✅ Get paginated student list
export async function getPaginatedStudents(skip, limit) {
  return await Student.find().skip(skip).limit(limit);
}

// ✅ Get total count of students
export async function getTotalStudents() {
  return await Student.countDocuments();
}
