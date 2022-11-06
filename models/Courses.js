const mongoose = require("mongoose");
const CoursesSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
  },
    subject: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalHours: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  }
});

const course = mongoose.model("Courses", CoursesSchema);
module.exports = course