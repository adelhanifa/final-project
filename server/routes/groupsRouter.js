const router = require('express').Router();
const controller = require('../controllers/groupsController');
const multer = require('multer');

//multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, './public/img/groups'); },
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

router.get('/', controller.findAllGroups);
router.get('/:id', controller.findOneGroup);
router.patch('/:id', controller.editOneGroup);
router.post('/create', upload.single('groupImg'), controller.createNewGroup);
router.get('/delete/:user/:group', controller.deleteGroup);


module.exports = router;