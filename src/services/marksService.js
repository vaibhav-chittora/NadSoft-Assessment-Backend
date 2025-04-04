import * as marksRepo from "../repositories/marksRepo.js";

// ✅ Add Marks with Validation
export async function addMarks(data) {
  if (!data.student || !data.subject || data.score === undefined) {
    throw new Error("All fields are required.");
  }
  if (data.score < 0 || data.score > 100) {
    throw new Error("Marks should be between 0 and 100.");
  }
  const existingMark = await marksRepo.findMarks(data.student, data.subject);
  if (existingMark) {
    throw new Error("Marks for this subject already exist.");
  }
  return await marksRepo.addMarks(data);
}

// ✅ Get Marks for a Student
export async function getMarksByStudentId(studentId) {
  return await marksRepo.getMarksByStudentId(studentId);
}

// ✅ Update Marks
export async function updateMarks(marksId, updateData) {
  if (updateData.marks < 0 || updateData.marks > 100) {
    throw new Error("Marks should be between 0 and 100.");
  }
  return await marksRepo.updateMarks(marksId, updateData);
}

// ✅ Delete Marks
export async function deleteMarks(marksId) {
  return await marksRepo.deleteMarks(marksId);
}
