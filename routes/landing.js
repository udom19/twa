const express = require('express');

const router = express.Router();
const landing = require('../controllers/landing');

/* GET home page. */
router.get('/', landing.getLanding);

module.exports = router;
