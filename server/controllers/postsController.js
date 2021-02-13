const Post = require("../models/Post");

// get all Posts
exports.findAllPosts = (req, res) => {
  Post.find({ group: req.params.group })
  .populate("user")
    .then((posts) => res.json({ status: "all posts this group are fonded", posts: posts, err: null }))
    .catch((err) => res.send({ status: "all posts this group are not fonded", post: null, err: err }));
};

//create a new Post
exports.createNewPost = (req, res) => {
  console.log(" ****************************************** ");
  req.body.user = req.params.user
  req.body.group = req.params.group
  console.log("Create Post: ", req.body);

  const newPost = new Post(req.body);
  newPost
    .save()
    .then((post) => res.json({ status: "this post is created", post: post, err: null }))
    .catch((err) => res.send({ status: "Post is not created", post: null, err: err }));
};

// edit one post
exports.editOnePost = (req, res) => {
  Post.findByIdAndUpdate( req.params.post , req.body).populate("user").populate("comment")
  .then(post => res.send({ status: "this post is updated", post: post, err: null }))
  .catch(err => res.send({ status: "Post is not updated", post: null, err: err }));
}


// delete post
exports.deletePost = (req, res) => {
  let postID = req.params.post
  let userID = req.params.user
  
  Post.findOneAndDelete({_id: postID, user: userID})
  .then(post => res.send({ status: "this post is deleted", post: post, err: null }))
  .catch(err => res.send({ status: "Post is not deleted", post: null, err: err }));
}
