'use strict';
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/messageRouteContollers');

router.get('/direct-messages/:id', controllers.getDirectMessages);

module.exports = router;
