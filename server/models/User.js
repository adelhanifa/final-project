const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String , unique: true },
  password: { type: String},
  profileImg: String,
  goals: [{type: Array, defoalt:['']}],
  joinedGroup: [{ type: Schema.Types.ObjectId, ref: 'Group'}],
  googleID: String
}, 
{
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;