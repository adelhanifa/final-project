const router = require('express').Router();
const controller = require('../controllers/goalsController');

router.get('/', controller.findAllGoals);
router.post('/create', controller.createNewGoal);

module.exports = router;