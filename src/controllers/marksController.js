import * as marksService from "../services/marksService.js";

// ✅ Add Marks
export async function addMarks(req, res) {
  try {
    const marks = await marksService.addMarks(req.body);
    res.status(201).json({ success: true, marks });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

// ✅ Get Marks by Student ID
export async function getMarksByStudentId(req, res) {
  try {
    const marks = await marksService.getMarksByStudentId(req.params.studentId);
    res.status(200).json({ success: true, marks });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

// ✅ Update Marks
export async function updateMarks(req, res) {
  try {
    const updatedMarks = await marksService.updateMarks(
      req.params.id,
      req.body
    );
    res.status(200).json({ success: true, updatedMarks });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

// ✅ Delete Marks
export async function deleteMarks(req, res) {
  try {
    await marksService.deleteMarks(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Marks deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
