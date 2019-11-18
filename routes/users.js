var express = require('express');
var router = express.Router();
let user = require('../controllers/user');

/* GET users listing. */
router.get('/', user.user);

module.exports = router;
