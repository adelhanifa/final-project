const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: { type: String, required: true },
  photo: String,
  coverPhoto: String,
  admin: { type: Schema.Types.ObjectId, ref: 'User'},
  members: [{ type: Schema.Types.ObjectId, ref: 'User'}]
}, 
{
  timestamps: true,
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;