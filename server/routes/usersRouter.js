const router = require('express').Router();
const controller = require('../controllers/usersController');
const multer = require('multer');

//multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, './public/img/users'); },
    filename: (req, file, cb) => {
        let fileName = file.originalname.split('.');
        cb(null, file.fieldname + '-' + Date.now() + '.' + fileName[fileName.length-1])
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

router.get('/', controller.findAllUsers);
router.post('/create', upload.single('profileImg'), controller.createNewUser);
router.post('/log-in', controller.loginUser);
router.post('/google-log-in', controller.googleLogIn);
router.patch('/addGoalsForm/:id',  controller.addGoalsForm);
router.patch('/joinNewGroup/:user/:group',  controller.joinNewGroup);
router.patch('/leaveGroup/:user/:group',  controller.leaveGroup);
router.get('/log-out', controller.logoutUser);
router.get('/confirmEmail/:id',  controller.confirmUserEmail);
router.post('/reserPasword/:id',  controller.resetUserPassword);

router.get('/checkEmailUsed/:email', controller.checkEmailUsed);
router.get('/checkLogInUser/', controller.checkLogInUser);

module.exports = router;