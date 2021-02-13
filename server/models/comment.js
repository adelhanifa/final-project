const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = new Schema({
  commentMsg: String,
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  post: { type: Schema.Types.ObjectId, ref: 'Post'}
}, 
{
  timestamps: true,
});
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;