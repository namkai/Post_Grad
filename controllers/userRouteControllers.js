'use strict';
const knex = require('../knex');
var exports = module.exports = {};

exports.getUser = (req,res) => {
    knex('users')
    .where('user_id', req.params.id)
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
};

exports.getProjects = (req,res) =>{
    knex('users')
    .innerJoin('portfolio', 'portfolio.user_id', 'users.user_id')
    .innerJoin('projects', 'projects.portfolio_id', 'portfolio.portfolio_id')
    .where('users.user_id', req.params.id)
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
};

exports.getFriends = (req,res) => {
    knex('friends')
    .innerJoin('users', 'users.user_id','friends.user_id')
    .where('friends.friend_user_id', req.params.id)
    .then(data => {
        res.json(data);
    });
};

// export.getPost = (req,res) => {
//     knex()
// }
