const router = require('express').Router();
const controller = require('../controllers/login.js');

// POST /login
router.post('/', controller.login);

module.exports = router;
