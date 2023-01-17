const mongoose = require("mongoose");
const ReportSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  username: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  resolved: { type: Boolean, default: false },
});

const Reports = mongoose.model("Reports", ReportSchema);
module.exports = Reports;
