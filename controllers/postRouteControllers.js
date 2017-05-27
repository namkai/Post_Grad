'use strict';
const knex = require('../knex');
var exports = module.exports = {};

exports.getFriendsPost = (req,res) => {
    knex('post')
    .innerJoin('users', 'users.user_id', 'post.user_id')
    .innerJoin('friends', 'friends.user_id', 'users.user_id')
    .where('friends.friend_user_id', req.params.id)
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
};
