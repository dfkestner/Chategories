const mongoose = require("mongoose");
const Chatroom = mongoose.model("Chatroom");

exports.createChatroom = async (req, res) => {
  const { name } = req.body;

  const nameRegex = /^[0-9 A-Za-z\s]+$/;

  if (!nameRegex.test(name)) throw "Topics can only have letters and numbers!";

  const chatroomExists = await Chatroom.findOne({ name });

  if (chatroomExists) throw "Topic with that name already exists!";

  const chatroom = new Chatroom({
    name,
  });

  await chatroom.save();

  res.json({
    message: "Topic created!",
  });
};
exports.getAllChatrooms = async (req, res) => {
  const chatrooms = await Chatroom.find({});

  res.json(chatrooms);
};