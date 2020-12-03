const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required!",
  },
});

module.exports = mongoose.model("Topic", topicSchema);