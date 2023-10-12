// const Post = require("../models/Post");


// exports.followUser = async(req, res) => {
//     try{
//       const currentUser = req.user;
//       const targetUser = req.params.id;

//       if(!currentUser || !targetUser){
//         return res.status(400).json({ error: 'Invalid request' });
//       }

//       if(currentUser.following.includes(targetUser)){
//         return res.status(400).json({ error: 'You are already following this user' });
//       }
//       currentUser.following.push(targetUser);
//       targetUser.followers.push(currentUser);
//       await currentUser.save();
//       await targetUser.save();
//       res.status(200).json({ message: 'Successfully followed user' });
//     }
//     catch(err){
//       res.status(500).json({ error: 'Internal server error' });
//     }
// }
  
// exports.unfollowUser = async(req, res) => {
//     try{
//       const currentUser = req.user;
//       const targetUser = req.params.id;

//       if(!currentUser || !targetUser){
//         return res.status(400).json({ error: 'Invalid request' });
//       }

//       if(!currentUser.following.includes(targetUser)){
//         return res.status(400).json({ error: 'You are not following this user' });
//       }
//       currentUser.following.pull(targetUser);
//       targetUser.followers.pull(currentUser);
//       await currentUser.save();
//       await targetUser.save();
//       res.status(200).json({ message: 'Successfully unfollowed user' });
//     }
//     catch(err){
//       res.status(500).json({ error: 'Internal server error' });
//     }
// }

// exports.getFollowingPosts = (req, res) => {
//     const currentUser = req.user;
//     const following = currentUser.following;
//     Post.find({ author: { $in: following } })
//         .sort({ createdAt: -1 })
//         .then((posts) => {
//         res.json({ posts });
//     })
//         .catch((err) => {
//         console.log(err);
//     });
// }

// exports.getTagPosts = async(req, res) => {
//     try{
//         const tag = req.params.tag;
//         const posts = await Post.find({ tags: tag })
//             .sort({ createdAt: -1 })
//             .catch((err) => {
//             console.log(err);
//         });
//         console.log("Fetched Posts");
//         console.log(posts);
//         res.json({ posts });
//     }
//     catch(error){
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

// exports.targetUserPosts = (req, res) => {
//     const targetUser = req.params.id;
//     Post.find({ author: targetUser })
//         .sort({ createdAt: -1 })
//         .then((posts) => {
//         res.json({ posts });
//     })
//         .catch((err) => {
//         console.log(err);
//     });
// }

// exports.getSinglePost = async(req, res) => {
//     console.log("getSinglePost");
//     try{
//         const post = await Post.findById(req.params.id).catch((err) => {
//             console.log(err);
//         });
//         if(!post){
//             return res.status(400).json({ error: 'Invalid request' });
//         }
//         res.json({ post });
//     }
//     catch(error){
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

// exports.getallPosts = async(req, res) => {
//     try{
//         const posts = await Post.find()
//             .sort({ createdAt: -1 })
//             .catch((err) => {
//             console.log(err);
//         });
//         console.log("Fetched Posts");
//         console.log(posts);
//         res.json({ posts });
//     }
//     catch(error){
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

// exports.searchUsers = async(req, res) => {
//     try{
//         const { query, options } = req.body;
//         const searchOptions = options || 'i';
//         console.log(query);
//         console.log(searchOptions);
//         if (!query) {
//             return res.status(400).json({
//                 error: 'Search query is required.'
//             });
//         }
//         const regexQuery = query.split(' ').join(`.*`);
//         const users = await User.find(
//             {
//                 $or: [
//                     { name: { $regex: regexQuery, $options: searchOptions } },
//                     { username: { $regex: regexQuery, $options: searchOptions } }
//                 ]
//             }
//         )
//         .catch((err) => {
//             console.log(err);
//         });
//         console.log("Fetched Users");
//         console.log(users);
//         res.json({ users });
//     }
//     catch(error){
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

// exports.getUser = async(req, res) => {
//     try{
//         const user = await User.findById(req.params.id).catch((err) => {
//             console.log(err);
//         });
//         if(!user){
//             return res.status(400).json({ error: 'Invalid request' });
//         }
//         res.json({ user });
//     }
//     catch(error){
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

// exports.createPost = (req, res) => {
//     const { title, summary, content, tags ,isPrivate } = req.body;
//     if (!title || !content){
//         console.log("Please add all the fields");
//         return res.status(422).json({ error: "Please add all the fields" });
//     }
//     const post = new Post({
//         title,
//         summary,
//         content,
//         tags,
//         isEdited: false,
//         isPrivate,
//         createdAt: new Date().toISOString(),
//     });
//     post
//         .save()
//         .then((post) => {
//         res.json({ message: "Post saved Succesfully !" });
//     })
//         .catch((err) => {
//         console.log(err);
//     });
// }

// exports.updatePost = (req, res) => {
//     const { title, summary, content, tags ,isPrivate } = req.body;
//     if (!title || !content){
//         console.log("Please add all the fields");
//         return res.status(422).json({ error: "Please add all the fields" });
//     }
//     const post = new Post({
//         title,
//         content,
//         tags,
//         isEdited: true,
//         isPrivate,
//         createdAt: new Date().toISOString(),
//     });
//     post
//         .save()
//         .then((post) => {
//         res.json({ message: "Post saved Succesfully !" });
//     })
//         .catch((err) => {
//         console.log(err);
//     });
// }

// exports.searchPosts = (req, res) => {
//   const { query, options } = req.body;
//   const searchOptions = options || 'i';
//   console.log(query);
//   console.log(searchOptions);
//   if (!query) {
//       return res.status(400).json({
//           error: 'Search query is required.'
//       });
//   }
//   const regexQuery = query.split(' ').join(`.*`);
//     Post.find(
//         {
//             $or: [
//                 { title: { $regex: regexQuery, $options: searchOptions } },
//                 { summary: { $regex: regexQuery, $options: searchOptions } }
//             ]
//         }
//     )
//         .sort({ createdAt: -1 })
//         .then((posts) => {
//         res.json({ posts });
//     })
//         .catch((err) => {
//         console.log(err);
//     });
// };


///******ABOVE CODE IS 11BACKUP CODE *****/

///******BELOW CODE IS ACTUAL CODE *****/
const Post = require("../models/Post");

exports.followUser = async(req, res) => {
    try{
      const currentUser = req.user;
      const targetUser = req.params.id;

      if(!currentUser || !targetUser){
        return res.status(400).json({ error: 'Invalid request' });
      }

      if(currentUser.following.includes(targetUser)){
        return res.status(400).json({ error: 'You are already following this user' });
      }
      currentUser.following.push(targetUser);
      targetUser.followers.push(currentUser);
      await currentUser.save();
      await targetUser.save();
      res.status(200).json({ message: 'Successfully followed user' });
    }
    catch(err){
      res.status(500).json({ error: 'Internal server error' });
    }
}
  
exports.unfollowUser = async(req, res) => {
    try{
      const currentUser = req.user;
      const targetUser = req.params.id;

      if(!currentUser || !targetUser){
        return res.status(400).json({ error: 'Invalid request' });
      }

      if(!currentUser.following.includes(targetUser)){
        return res.status(400).json({ error: 'You are not following this user' });
      }
      currentUser.following.pull(targetUser);
      targetUser.followers.pull(currentUser);
      await currentUser.save();
      await targetUser.save();
      res.status(200).json({ message: 'Successfully unfollowed user' });
    }
    catch(err){
      res.status(500).json({ error: 'Internal server error' });
    }
}

exports.getFollowingPosts = (req, res) => {
    const currentUser = req.user;
    const following = currentUser.following;
    Post.find({ userId: { $in: following } })
        .sort({ createdAt: -1 })
        .then((posts) => {
        res.json({ posts });
    })
        .catch((err) => {
        console.log(err);
    });
}

exports.getFollowers = async(req, res) => {
    try{
        const user = await User.findById(req.params.id).catch((err) => {
            console.log(err);
        });
        if(!user){
            return res.status(400).json({ error: 'Invalid request' });
        }
        res.json({ followers: user.followers });
    }
    catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
}


exports.getTagPosts = async(req, res) => {
    try{
        const tag = req.params.tag;
        const posts = await Post.find({ tags: tag })
            .sort({ createdAt: -1 })
            .catch((err) => {
            console.log(err);
        });
        console.log("Fetched Posts");
        console.log(posts);
        res.json({ posts });
    }
    catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.targetUserPosts = (req, res) => {
    const targetUser = req.params.id;
    Post.find({ userId: targetUser })
        .sort({ createdAt: -1 })
        .then((posts) => {
        res.json({ posts });
    })
        .catch((err) => {
        console.log(err);
    });
}

exports.getSinglePost = async(req, res) => {
    console.log("getSinglePost");
    try{
        const post = await Post.findById(req.params.id).catch((err) => {
            console.log(err);
        });
        if(!post){
            return res.status(400).json({ error: 'Invalid request' });
        }
        res.json({ post });
    }
    catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.getallPosts = async(req, res) => {
    try{
        const posts = await Post.find()
            .sort({ createdAt: -1 })
            .catch((err) => {
            console.log(err);
        });
        console.log("Fetched Posts");
        posts.slice(0, 5);
        res.json({ posts });
    }
    catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.searchUsers = async(req, res) => {
    const{query, options} = req.body;
    const searchOptions = options || 'i';
    console.log(query);
    console.log(searchOptions);
    if (!query) {
        return res.status(400).json({
            error: 'Search query is required.'
        });
    }
    const regexQuery = query.split(' ').join(`.*`);
    const users = await User.find({
        $and: [
          {
            $or: [
              { name: { $regex: regexQuery, $options: searchOptions } },
              { username: { $regex: regexQuery, $options: searchOptions } }
            ]
          },
          {_id:{$ne: req.user._id}} 
        ]
      }).catch((err) => {
        console.log(err);
      });
    console.log("Fetched Users");
    console.log(users);
    res.json({ users });
}

exports.getUser = async(req, res) => {
    try{
        const user = await User.findById(req.params.id).catch((err) => {
            console.log(err);
        });
        if(!user){
            return res.status(400).json({ error: 'Invalid request' });
        }
        res.json({ user });
    }
    catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.createPost = (req, res) => {
    console.log("Inside Backend createPost");
    const { title, summary, content, tags ,author,isPrivate,userId } = req.body;
    
    if (!title || !content){
        console.log("Please add all the fields");
        return res.status(422).json({ error: "Please add all the fields" });
    }
    const post = new Post({
        title,
        summary,
        content,
        tags,
        author,
        userId,
        isEdited: false,
        isPrivate,
        createdAt: new Date().toISOString(),
    });
    post
        .save()
        .then((post) => {
        res.json({ message: "Post saved Succesfully !" });
    })
        .catch((err) => {
        res.status(500).json({ error: 'Internal server error' });
        console.log(err);
    });
}

exports.updatePost = (req, res) => {
    const { title, summary, content, tags ,isPrivate } = req.body;
    if (!title || !content){
        console.log("Please add all the fields");
        return res.status(422).json({ error: "Please add all the fields" });
    }
    const post = new Post({
        title,
        content,
        tags,
        isEdited: true,
        isPrivate,
        createdAt: new Date().toISOString(),
    });
    post
        .save()
        .then((post) => {
        res.json({ message: "Post saved Succesfully !" });
    })
        .catch((err) => {
        console.log(err);
    });
}

exports.searchPosts = async(req, res) => {
  const { query, options } = req.body;
  const searchOptions = options || 'i';
  console.log(query);
  console.log(searchOptions);
  if (!query) {
      return res.status(400).json({
          error: 'Search query is required.'
      });
  }
  const regexQuery = query.split(' ').join(`.*`);
    await Post.find({
    
            
                $or: [
                    { title: { $regex: regexQuery, $options: searchOptions } },
                    { summary: { $regex: regexQuery, $options: searchOptions } }
                ]
            
            
        
    })
        .sort({ createdAt: -1 })
        .then((posts) => {
        res.json({ posts });
    })
        .catch((err) => {
        console.log(err);
    });
};


exports.getPostLikes = async(req, res) => {
    try{
        const post = await Post.findById(req.params.id).catch((err) => {
            console.log(err);
        });
        if(!post){
            return res.status(400).json({ error: 'Invalid request' });
        }
        res.json({ likes: post.likes });
    }
    catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.likePost = async(req, res) => {
    try{
        const post = await Post.findById(req.params.id).catch((err) => {
            console.log(err);
        });
        if(!post){
            return res.status(400).json({ error: 'Invalid request' });
        }
        if(post.likes.includes(req.user._id)){
            return res.status(400).json({ error: 'You have already liked this post' });
        }
        post.likes.push(req.user._id);
        await post.save();
        res.json({ message: 'Successfully liked post' });
    }
    catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.unlikePost = async(req, res) => {
    try{
        const post = await Post.findById(req.params.id).catch((err) => {
            console.log(err);
        });
        if(!post){
            return res.status(400).json({ error: 'Invalid request' });
        }
        if(!post.likes.includes(req.user._id)){
            return res.status(400).json({ error: 'You have not liked this post' });
        }
        post.likes.pull(req.user._id);
        await post.save();
        res.json({ message: 'Successfully unliked post' });
    }
    catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.getPostComments = async(req, res) => {
    try{
        const post = await Post.findById(req.params.id).catch((err) => {
            console.log(err);
        });
        if(!post){
            return res.status(400).json({ error: 'Invalid request' });
        }
        res.json({ comments: post.comments });
    }
    catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
}
