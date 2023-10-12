const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    /*
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  */
  comments: [
    {
      text: {
        type: String,
        required: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  parentFlag: {
    type: Boolean,
    default: true,
    },
    /*Will be false when it is a comment reply*/
  replies: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    default: null,
  },
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;