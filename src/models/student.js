import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  marks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mark" }], // ✅ Fix: Add reference
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
