const router = require('express').Router();
const AuthController = require('../controllers/AuthController');

router.post('/', AuthController.signIn);

module.exports = router;
