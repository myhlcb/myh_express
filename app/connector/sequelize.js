const Sequelize = require ('sequelize');

// connect method 1
// const sequelize = new Sequelize ('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'postgres',
// });
const {user, pass, host, port, database, pool} = require ('../../config').pg;
const url = `postgres://${user}:${pass}@${host}:${port}/${database}`;
const sequelize = new Sequelize (url, {pool});
