const mongoose = require("mongoose");
const Topic = mongoose.model("Topic");
const jwt_decode = require("jwt-decode");
const Message = require("../models/Message");
const token = localStorage.getItem(CC_token);
const decoded = jwt_decode(token);
console.log(decoded);

exports.addTopic = async (req, res) => {
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

exports.allChats = async(req, res) => {
  const getChats = await Message.find({ user: decoded.toString()})

  if (!getChats) return res.status(400).send('You do not have any chats!')
};

// exports.newChat = async(req, res) => {
//   const { author, message } = 
// }