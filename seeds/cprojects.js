'use strict';
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('projects').del().then(function() {
        // Inserts seed entries
        return knex('projects').insert([
            {
                portfolio_id: 1,
                title:'Tee-Bay',
                project_photo:'https://teebay.herokuapp.com/#/login',
                description:'Tee-Bay A full stack golf auctioning web site where the general public can bid on country club tee times with a member. The application benefits both parties by allowing the general public to play a country club they would not have access to without Tee-Bay, and benefits the member allowing them to make a profit off their membership.',
                technologies:'React, Node.js, Express, PostgreSQL, HTML/CSS',
                live_site:'https://teebay.herokuapp.com/#/login',
                github:'https://github.com/TLPcoder/capstone_tee'
            }, {
                portfolio_id: 1,
                title:'Web-Pocket',
                project_photo:'https://webocketbookmark.herokuapp.com/',
                description:'I was tired of the old fashion bookmark so I created my own using iFrames. I am a very visual person and never remembered what bookmarks went to what article I was reading or video I like. By using iFrames I was able to load the webpage in webpocket and quickly flip though all my bookmarks to find the right one and once I do you I simply click a button and it opens the website in a new page. Unfortunately before I started I was unaware that many websites blocked iFrames from load their sites',
                technologies:'React-Redux, Node.js, Express, PostgreSQL, HTML/CSS',
                live_site:'https://webocketbookmark.herokuapp.com/',
                github:'https://github.com/TLPcoder/WebPocket'
            }, {
                portfolio_id: 2,
                title:'Apprice',
                project_photo:'',
                description:'Find the the stores with the cheapest goods',
                technologies:'React-Redux, Node.js, Express, PostgreSQL, HTML/CSS',
                live_site:'',
                github:'https://github.com/namkai/Apprice-Front-End'
            },{
                portfolio_id: 2,
                title:'Reddit Clone',
                project_photo:'',
                description:'A clone of the popular website reddit',
                technologies:'React-Redux, Materialize',
                live_site:'',
                github:'https://github.com/namkai/Reddit_Clone'
            },{
                portfolio_id: 3,
                title:'Trofí Bouffe',
                project_photo:'https://trofi-bouffe.herokuapp.com/',
                description:'This is a recipe building app with the goal of having users being able to create and maintain their own recipes, auto-generate nutrition facts form my database of ingredients, and possibly collaborate with AppriceMe to generate shopping lists for recipes.',
                technologies:'React-Redux, Node.js, Express, PostgreSQL, HTML/CSS',
                live_site:'https://trofi-bouffe.herokuapp.com/',
                github:'https://github.com/yubodiwu/Trofi-Bouffe'
            },{
                portfolio_id: 3,
                title:'Chess AI',
                project_photo:'',
                description:'Using minimax algorithm, alpha beta pruning, and proper heuristics we were able to produce an AI that move’s intelligently.	',
                technologies:'Javascript',
                live_site:'http://simple-chess-ai.herokuapp.com/',
                github:'https://github.com/yubodiwu/Chess_AI'
            }
        ]);
    });
};
