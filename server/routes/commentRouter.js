const router = require('express').Router();
const controller = require('../controllers/commentController');

router.get('/', controller.findAllComments);
router.post('/create', controller.createNewComment);

module.exports = router;