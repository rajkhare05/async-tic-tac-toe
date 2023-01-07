const router = require('express').Router();
const controller = require('../controllers/registration.js');

// POST /registration
router.post('/', controller.registration);

module.exports = router;
