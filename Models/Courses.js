const mongoose = require("mongoose");
const CoursesSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  exercise: {
    type: Object,
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
  },
  link: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  video: {
    type: String,
    required: false,
  },
  videoLinks: {
    type: Array,
  },
  subtitles: {
    type: Array,
  },
  videos: {
    type: Array,
  },
  count: {
    type: Number,
  },
});

const course = mongoose.model("Courses", CoursesSchema);
module.exports = course;
