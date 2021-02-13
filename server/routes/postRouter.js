const router = require("express").Router();
const controller = require("../controllers/postsController");

router.get("/:group", controller.findAllPosts);
router.patch("/:post", controller.editOnePost);
router.post("/create/:user/:group", controller.createNewPost);
router.get("/delete/:user/:post", controller.deletePost);

module.exports = router;
