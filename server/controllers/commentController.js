const Comment = require('../models/Comment');


// get all Comment
exports.findAllComments = (req, res) => {
    Comment.find({ post: req.params.post }).sort( { createdAt: -1 } )
    .populate("user")
      .then((comments) => res.json({ status: "all comments this post are fonded", comments: comments, err: null }))
      .catch((err) => res.send({ status: "all comments this post are not fonded", comments: null, err: err }));
  };
  
  //create a new Comment
  exports.createNewComment = (req, res) => {
    console.log(" ****************************************** ");
    req.body.user = req.params.user
    req.body.post = req.params.post
    console.log("Create Comment: ", req.body);
  
    const newComment = new Comment(req.body);
    newComment
      .save()
      .then((comment) => res.json({ status: "this comment is created", comment: comment, err: null }))
      .catch((err) => res.send({ status: "comment is not created", comment: null, err: err }));
  };
  
  // delete Comment
  exports.deleteComment = (req, res) => {
    let comID = req.params.com
    let userID = req.params.user
    
    Comment.findOneAndDelete({_id: comID, user: userID})
    .then(comment => res.send({ status: "this comment is deleted", comment: comment, err: null }))
    .catch(err => res.send({ status: "comment is not deleted", comment: null, err: err }));
  }
  