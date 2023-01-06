const mongoose = require("mongoose");
const CourseProgressesSchema = new mongoose.Schema({
  courseID: {
    type: Number,
  },
  username: {
    type: String,
  },
  subtitles: {
    type: [{ subtitle: String, isDone: Boolean }],
  },
  certificateSent: { type: Boolean, default: false },
});

const CourseProgresses = mongoose.model(
  "CourseProgresses",
  CourseProgressesSchema
);
module.exports = CourseProgresses;
