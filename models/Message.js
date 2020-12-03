const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Topic is required!",
    ref: "Topic",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Topic is required!",
    ref: "User",
  },
  message: {
    type: String,
    required: "Message is required!",
  },
});

module.exports = mongoose.model("Message", messageSchema);