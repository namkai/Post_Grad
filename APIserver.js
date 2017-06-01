'use strict';
const PORT = 8888;
const express = require('express');
const app = express();
const users = require('./routers/userRoutes');
const post = require('./routers/postRoutes');
const messages = require('./routers/messagesRoutes');

app.get('/', function(req, res) {
    res.send('fuck');
});
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});
app.use('/users', users);
app.use('/posts', post);
app.use('/messages', messages);

app.listen(PORT, function() {
    console.log(PORT);
});
