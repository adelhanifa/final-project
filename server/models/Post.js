const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
    postMsg: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    group: { type: Schema.Types.ObjectId, ref: "Group" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
