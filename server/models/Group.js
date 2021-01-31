const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const groupSchema = new Schema({
  titel: { type: String, required: true },
  photo: String,
  description: String,
  goal: { type: Schema.Types.ObjectId, ref: 'Goal'},
  admin: { type: Schema.Types.ObjectId, ref: 'User'},
  members: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  books: {type:Array}
}, 
{
  timestamps: true,
});
const Group = mongoose.model('Group', groupSchema);
module.exports = Group;