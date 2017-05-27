'use strict';
const knex = require('../knex');
var exports = module.exports = {};

exports.getFriendsPost = (req, res) => {
    knex('post')
    .innerJoin('users', 'users.user_id', 'post.user_id')
    .innerJoin('friends', 'friends.user_id', 'users.user_id')
    .where('friends.friend_user_id', req.params.id).then(data => {
        var likes = [];
        data.forEach(el => {
            likes.push(new Promise((resolve,reject)=>{
                resolve(knex('likes').count('like_id').where('post_id', el.post_id).then((likes) => {
                    el.likeCount = Number(likes[0].count);
                    return el;
                }));
                reject('something went wrong with the like');
            }));
        });
        return Promise.all(likes);
    }).then(data => {
        var comments = [];
        data.forEach(el => {
            comments.push(new Promise((resolve,reject)=>{
                resolve(knex('comments').where('post_id', el.post_id).then((comments) => {
                    el.comments = comments[0];
                    return el;
                }));
                reject('something went wrong with the comment');
            }));
        });
        return Promise.all(comments);
    }).then(data => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
};
