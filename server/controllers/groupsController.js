const Group = require('../models/Group');

// get all groups
exports.findAllgroups = (req, res) => {
    Group.find()
    .then(group => res.json(group))
    .catch(err => res.status(400).json('Error: ' + err));
}

//create a new group
exports.createNewGroup = (req, res) => {
    console.log('******************************************');
    console.log('create group: ',req.body);

    const newGroup = new Group(req.body);
    newGroup.save()
    .then(group => res.json(group))
    .catch(err => res.status(400).json('Error: ' + err));
}