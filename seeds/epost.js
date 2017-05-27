'use strict';
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('post').del().then(function() {
        // Inserts seed entries
        return knex('post').insert([
            {
                user_id: 1,
                title: 'How to learn react and redux',
                post_body: 'One of the most popular articles on Medium this year was Jose Aguinaga’s “How it feels to learn JavaScript in 2016.” All jokes aside, for someone new to web development, trying to learn React, Redux,and all the other frameworks/tools/modules like webpack, Babel, etc. was confusing and sometimes overwhelming.',
                url_link: 'https://iot-for-all.com/how-to-learn-react-and-redux/',
                image: 'https://iot-for-all.com/wp-content/uploads/2017/03/reactredux.png'
            }, {
                user_id: 1,
                title: 'I got a new Job',
                post_body: 'I recently got hired as a part time instructor at Galvanize teching students javascript',
                url_link: '',
                image: ''
            }, {
                user_id: 1,
                title: 'Seed Data',
                post_body: 'Making seed data is the most boring part of any developers job',
                url_link: '',
                image: ''
            },{
                user_id: 2,
                title: 'RxJS',
                post_body: 'Learn RxJS by reading the docs give it a try',
                url_link: 'http://reactivex.io/rxjs/',
                image: ''
            },{
                user_id: 2,
                title: 'Saga vs Observables',
                post_body: 'Checkout why you should use observable over sagas.',
                url_link: 'https://stackoverflow.com/questions/40021344/why-use-redux-observable-over-redux-saga',
                image: ''
            },{
                user_id: 2,
                title: '',
                post_body: '',
                url_link: '',
                image: ''
            },{
                user_id: 3,
                title: 'Food',
                post_body: 'I love food',
                url_link: 'http://www.foodnetwork.com/',
                image: 'http://www.foodnetwork.com/grilling/summer-parties/the-best-summer-appetizers#item-29'
            }
        ]);
    });
};
