const _ = require ('lodash');
const env = process.env.NODE_ENV || 'dev';
console.log (Object.assign ({}, require (`./${env}`)), 1111);
module.exports = Object.assign ({}, require (`./${env}`));
