const express = require('express');

const adminRouter = express.Router();
const admin = require('../controllers/admin');


adminRouter.get('/admin', admin.getAdmin);

module.exports = adminRouter;
