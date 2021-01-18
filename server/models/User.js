const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String , unique: true },
  password: { type: String},
  profileImg: String,
  goals:[{ type: Schema.Types.ObjectId, ref: 'Goal'}],
  joinedGroup: [{ type: Schema.Types.ObjectId, ref: 'Group'}],
  activated: { type: Boolean , default: false},
  googleID: String
}, 
{
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;