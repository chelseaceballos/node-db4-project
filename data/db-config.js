const knex = require('knex');

const configurations = require('../knexfile.js'); 
const environment = process.env.NODE_ENV

module.exports = knex(configurations[environment]);

// What's on my .env file
// PORT=5000
// NODE_ENV=development