const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Topic is required!",
    ref: "Topic",
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Topic is required!",
    ref: "User",
  },
  user: {
    type: String
  },
  message: {
    type: String,
    required: "Message is required!",
  } 
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("Message", messageSchema);