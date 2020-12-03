const mongoose = require('mongoose');

const chategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: 'Chategory title is required!',
    },
    topic: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic'
      }
    ], 
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic'
      }
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Chategory', chategorySchema);