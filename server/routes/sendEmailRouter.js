const router = require('express').Router();
const controller = require('../controllers/sendEmailController');

router.post('/contact-form', controller.contactForm);
router.post('/reset-password', controller.resetPassword);

module.exports = router;