const mysql = require ('mysql');
const Promise = require ('bluebird');
const {mysqldb} = require ('../../config');

const {host, user, password, database} = mysqldb;
const pool = mysql.createPool ({
  host,
  user,
  password,
  database,
});
const poolAsync = Promise.promisify (pool.query.bind (pool));
module.exports = poolAsync;
