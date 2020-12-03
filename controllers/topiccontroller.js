const mongoose = require("mongoose");
const Topic = mongoose.model("Topic");

exports.createTopic = async (req, res) => {
  const { name } = req.body;

  const nameRegex = /^[0-9 A-Za-z\s]+$/;

  if (!nameRegex.test(name)) throw "Topics can only have letters and numbers!";

  const topicExists = await Topic.findOne({ name });

  if (topicExists) throw "Topic with that name already exists!";

  const topic = new Topic({
    name,
  });

  await topic.save();

  res.json({
    message: "Topic created!",
  });
};
exports.getAllTopics = async (req, res) => {
  const topics = await Topic.find({});

  res.json(topics);
};