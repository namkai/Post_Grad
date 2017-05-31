'use strict';
const knex = require('../knex');
var exports = module.exports = {};

exports.getFriendsPost = (req, res) => {
    knex('post')
    .innerJoin('users', 'users.user_id', 'post.user_id')
    .innerJoin('friends', 'friends.user_id', 'users.user_id')
    .where('friends.friend_user_id', req.params.id).then(data => {
        return Promise.all(data.map(el => {
            return new Promise((resolve,reject)=>{
                resolve(knex('likes').count('like_id').where('post_id', el.post_id).then((likes) => {
                    console.log('likes', likes);
                    el.likeCount = Number(likes[0].count);
                    return el;
                }));
                reject('something went wrong with the like');
            });
        }));
    }).then(data => {
        return Promise.all(data.map(el => {
            return new Promise((resolve,reject)=>{
                resolve(knex('comments').where('post_id', el.post_id).then((comments) => {
                    el.comments = comments;
                    return el;
                }));
                reject('something went wrong with the comment');
            });
        }));
    }).then(data => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
};
