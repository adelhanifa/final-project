const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goalSchema = new Schema({
  name: { type: String, required: true },
  icon: String,
}, 
{
  timestamps: true,
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;