import Marks from "../models/marks.js";

// ✅ Add Marks for Student

// Add new marks (only if they don't exist)
export async function addMarks(data) {
  const newMark = new Marks(data);
  return await newMark.save();
}

// ✅ Get Marks by Student ID
export async function getMarksByStudentId(studentId) {
  return await Marks.find({ student: studentId });
}

// Find existing marks for a student and subject
export async function findMarks(studentId, subject) {
  return await Marks.findOne({ student: studentId, subject });
}

// ✅ Update Marks
export async function updateMarks(marksId, updateData) {
  return await Marks.findByIdAndUpdate(marksId, updateData, { new: true });
}

// ✅ Delete Marks
export async function deleteMarks(marksId) {
  return await Marks.findByIdAndDelete(marksId);
}
