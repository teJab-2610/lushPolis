const Post = require("../models/Post");

exports.createPost = (req, res) => {
    const { title, text } = req.body;
    if (!title || !text){
        console.log("Please add all the fields");
        return res.status(422).json({ error: "Please add all the fields" });
    }
    const post = new Post({
        title,
        text,
    });
    post
        .save()
        .then((post) => {
        res.json({ message: "saved successfully" });
    })
        .catch((err) => {
        console.log(err);
    });
}
