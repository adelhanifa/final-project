const Group = require('../models/Group');

// get all groups
exports.findAllGroups = (req, res) => {
    Group.find().populate("goal").populate("admin").populate("members")
    .then(group => res.json(group))
    .catch(err => res.status(400).json('Error: ' + err));
}

// get all groups
exports.findOneGroup = (req, res) => {
    Group.findById( req.props.id ).populate("goal").populate("admin").populate("members")
    .then(group => res.json(group))
    .catch(err => res.status(400).json('Error: ' + err));
}

//create a new group
exports.createNewGroup = (req, res) => {
    console.log('******************************************');
    console.log("req.body", req.body);
    console.log("req.file", req.file);
    req.body.photo = "/img/groups/" + req.file.filename;

    const newGroup = new Group(req.body);
    newGroup.save()
    .then(group => res.json(group))
    .catch(err => res.status(400).json('Error: ' + err));
}