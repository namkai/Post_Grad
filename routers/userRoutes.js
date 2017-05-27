'use strict';

const express = require('express');
const router = express.Router();
const controllers = require('../controllers/userRouteControllers');

router.get('/:id', controllers.getUser);
router.get('/projects/:id', controllers.getProjects);
router.get('/friends/:id', controllers.getFriends);

module.exports = router;
