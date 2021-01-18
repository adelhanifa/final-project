const Goal = require('../models/Goal');

// get all goals
exports.findAllGoals = (req, res) => {
    Goal.find()
    .then(goals => res.json(goals))
    .catch(err => res.status(400).json('Error: ' + err));
}

//create a new goal
exports.createNewGoal = (req, res) => {
    console.log('******************************************');
    console.log('create goal: ',req.body);
    Goal.findOne({name:req.body.name})
    .then(goal=>{
        if(!goal){
            const newGoal = new Goal(req.body);
            newGoal.save()
            .then(goal => res.json(goal))
            .catch(err => res.status(400).json('Error: ' + err));
        }
        else console.log('goal found already created', goal)
    })
   
}
