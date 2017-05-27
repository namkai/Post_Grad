'use strict';
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/postRouteControllers');

router.get('/friends-post/:id', controllers.getFriendsPost);

module.exports = router;
