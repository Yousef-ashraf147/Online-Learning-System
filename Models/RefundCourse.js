const mongoose = require("mongoose");
const refundCourseSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  username: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const RefundCourse = mongoose.model("RefundCourse", refundCourseSchema);
module.exports = RefundCourse;
