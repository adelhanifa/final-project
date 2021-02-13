const Post = require("../models/Post");

// get all Posts
exports.findAllPosts = (req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
};

//create a new Post
exports.createNewPost = (req, res) => {
  console.log(" ****************************************** ");
  console.log("Create Post: ", req.body);
  // Post.findOne({ name: req.body.name }).then((Post) => {
  //   if (!Post) {
      const newPost = new Post(req.body);
      newPost
        .save()
        .then((post) => res.json(post))
        .catch((err) => res.status(400).json("Error: " + err));
    // } 
    // else console.log("Post found already created", Post);
  // });
};

// edit one post
exports.editOnePost = (req, res) => {
  Post.findByIdAndUpdate( req.params.id , req.body).populate("user").populate("comment")
  .then(post => res.send({ status: "this post is updated", post: post, err: null }))
  .catch(err => res.send({ status: "Post is not updated", post: null, err: err }));
}


// delete post
exports.deletePost = (req, res) => {
  let postID = req.params.group, userID = req.params.user
  let upadateUser = [];
  User.findById(userID)
    .then((data) => {
      upadateUser = data.joinedGroup.filter(x => x != groupID)
        User.findByIdAndUpdate(userID, { joinedGroup: upadateUser })
        .then(() => Post.findByIdAndDelete(postID) )
        .then(()=> res.send({ status: "post is deleted", post: true, err: null, }) )
        .catch((err) => {
          console.log(err);
          res.send({ status: "post not deleted  something wrong", post: null, err: err, });
        }); 
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: "post not deleted  something wrong", post: null, err: err, });
    });
}
