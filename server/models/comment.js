const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = new Schema({
  commentMsg: String,
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  group: { type: Schema.Types.ObjectId, ref: 'Group'}
}, 
{
  timestamps: true,
});
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;