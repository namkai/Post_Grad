'use strict';
const knex = require('../knex');
var exports = module.exports = {};

exports.getDirectMessages = (req, res) => {
    knex.raw(`select combined_user_id from direct_messages inner join users on (users.user_id = direct_messages.user_id) where direct_messages.user_id = ${req.params.id} or direct_messages.friend_user_id = ${req.params.id} group by(direct_messages.combined_user_id);`)
    .then(data => {
        var findMessages = data.rows.map(el => {
            return new Promise((resolve,reject) => {
                resolve(
                    knex('direct_messages')
                    .innerJoin('users','users.user_id','direct_messages.user_id')
                    .where('combined_user_id',el.combined_user_id)
                    .then(messages => {
                        return messages;
                    }).catch(err => {
                        console.log(err);
                    })
                );
                reject('the message call did not go through');
            });
        });
        return Promise.all(findMessages);
    }).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    });
};
