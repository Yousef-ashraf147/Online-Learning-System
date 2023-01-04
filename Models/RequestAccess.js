const mongoose = require("mongoose");
const requestAccessSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  username: {
    type: String,
  },
});

const RequestAccess = mongoose.model("Courses", requestAccessSchema);
module.exports = RequestAccess;
