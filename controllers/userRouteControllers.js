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
