const Group = require('../models/Group');
const User = require("../models/User");
const Post = require('../models/Post');
const Comment = require("../models/Comment");

// get all groups
exports.findAllGroups = (req, res) => {
    Group.find().populate("goal").populate("admin").populate("members")
    .then(group => res.send({ status: "all Groups are founded", group: group, err: null }))
    .catch(err => res.send({ status: "all Groups are not founded", group: null, err: err }));
}

// get one groups
exports.findOneGroup = (req, res) => {
    Group.findById( req.params.id ).populate("goal").populate("admin").populate("members")
    .then(group => res.send({ status: "this Group is founded", group: group, err: null }))
    .catch(err => res.send({ status: "Group is not founded", group: null, err: err }));
}

//create a new group
exports.createNewGroup = (req, res) => {
    console.log('******************************************');
    console.log("req.body", req.body);
    console.log("req.file", req.file);
    req.body.photo = "/img/groups/" + req.file.filename;
    req.body.members=[req.body.admin]
    const newGroup = new Group(req.body);
    newGroup.save()
    .then(group => {
        User.findById(req.body.admin)
        .then((data) => {
          User.findByIdAndUpdate(req.body.admin , { joinedGroup: [...data.joinedGroup, group._id]})
          .then(() =>res.send({ status: "Group is created", group: group, err: null }))
        })
        .catch((err) => res.send({ status: "Group is not created", group: null, err: err }));
    })
    .catch(err => res.send({ status: "Group is not created 35", group: null, err: err }));
}

// edit one groups
exports.editOneGroup = (req, res) => {
    Group.findByIdAndUpdate( req.params.id , req.body).populate("goal").populate("admin").populate("members")
    .then(group => res.send({ status: "this Group is updated", group: group, err: null }))
    .catch(err => res.send({ status: "Group is not updated", group: null, err: err }));
}


// delete group
exports.deleteGroup = (req, res) => {
    let groupID = req.params.group, userID = req.params.user
    let upadateUser = [];
    User.findById(userID)
      .then((data) => {
        upadateUser = data.joinedGroup.filter(x => x != groupID)
          User.findByIdAndUpdate(userID, { joinedGroup: upadateUser })
          .then(() => Group.findByIdAndDelete(groupID) )
          .then(() => Post.find({group: groupID})
                      .then(data => data.map(async item => {
                        await Comment.deleteMany({ post: item._id})
                        await console.log(item._id)
                      }))
          )
          .then(()=> Post.deleteMany({group: groupID}))
          .then(()=> res.send({ status: "group is deleted", group: true, err: null, }) )
          .catch((err) => {
            console.log(err);
            res.send({ status: "group not deleted  something wrong", group: null, err: err, });
          }); 
      })
      .catch((err) => {
        console.log(err);
        res.send({ status: "group not deleted  something wrong", group: null, err: err, });
      });
  }