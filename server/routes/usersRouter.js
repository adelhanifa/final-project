const router = require('express').Router();
const controller = require('../controllers/usersController');

router.get('/', controller.findAllUsers);
router.post('/create', controller.createNewUser);
router.post('/log-in', controller.loginUser)

module.exports = router;