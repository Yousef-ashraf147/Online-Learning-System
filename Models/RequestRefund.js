const mongoose = require("mongoose");
const requestRefundSchema = new mongoose.Schema({
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

const RequestRefund = mongoose.model("RequestRefund", requestRefundSchema);
module.exports = RequestRefund;
