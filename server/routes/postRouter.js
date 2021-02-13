const router = require("express").Router();
const controller = require("../controllers/postsController");

router.get("/", controller.findAllPosts);
router.patch("/:id", controller.editOnePost);
router.post("/create", controller.createNewPost);
router.get("/delete/:user/:post", controller.deletePost);

module.exports = router;
