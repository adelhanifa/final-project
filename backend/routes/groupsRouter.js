const router = require('express').Router();
const controller = require('../controllers/groupsController');

router.get('/', controller.findAllgroups);

router.post('/create', controller.createNewGroup);

module.exports = router;