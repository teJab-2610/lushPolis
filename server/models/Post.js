const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    userId : String,
    title: String,
    content: String,
    createdAt : Date, 
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;