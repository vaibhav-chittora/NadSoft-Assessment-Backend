import mongoose from "mongoose";

const markSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  }, // ✅ Student reference

  subject: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Mark = mongoose.model("Mark", markSchema);
export default Mark;
