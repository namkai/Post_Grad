'use strict';
const PORT = 8888;
const express = require('express');
const app = express();
const users = require('./routers/userRoutes');
const post = require('./routers/postRoutes');

app.get('/', function(req,res){
    res.send('fuck');
});

app.use('/users', users);
app.use('/post', post);

app.listen(PORT, function(){
    console.log(PORT);
});
