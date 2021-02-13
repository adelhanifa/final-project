const Comment = require('../models/Comment');

// get all Comments
exports.findAllComments = (req, res) => {
    Comment.find()
    .then(Comments => res.json(Comments))
    .catch(err => res.status(400).json('Error: ' + err));
}

//create a new Comment
exports.createNewComment = (req, res) => {
    console.log('******************************************');
    console.log('Create Comment: ',req.body);
    Comment.findOne({name:req.body.name})
    .then(Comment=>{
        if(!Comment){
            const newComment = new Comment(req.body);
            newComment.save()
            .then(Comment => res.json(Comment))
            .catch(err => res.status(400).json('Error: ' + err));
        }
        else console.log('Comment found already created', Comment)
    })
}