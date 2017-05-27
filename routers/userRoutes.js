'use strict';

const express = require('express');
const router = express.Router();
const controllers = require('../controllers/userRouteControllers');

router.get('/:id', controllers.getUser);

module.exports = router;
