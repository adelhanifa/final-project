const router = require('express').Router();
const controller = require('../controllers/commentController');

router.get("/:post", controller.findAllComments);
router.post("/create/:user/:post", controller.createNewComment);
router.get("/delete/:user/:com", controller.deleteComment);

module.exports = router;
