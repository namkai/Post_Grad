'use strict';
module.exports = {

    development: {
        client: 'postgresql',
        connection: "postgres://localhost/postgrad" || process.env.DATABASE_URL,
        pool: {
            min: 1,
            max: 1
        }
    },
    test: {
        client: 'postgresql',
        connection: "postgres://localhost/postgrad",
        pool: {
            min: 1,
            max: 1
        }
    }
};
