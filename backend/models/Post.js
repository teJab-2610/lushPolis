const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    userId : String,
    title: String,
    content: String,
    summary: String,
    createdAt : Date, 
    author: String,
    editedAt : Date,
    images: [{type:String}],
    isPrivate :{
        type: Boolean,
    },
    commentsId: [{type: mongoose.Schema.Types.ObjectId, ref: "Post" } ],
    isEdited : {
        type: Boolean,
        default: false,
    },
    tags: [{type:String}],
});
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;

/*
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  images:[
    {
      title: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
*/