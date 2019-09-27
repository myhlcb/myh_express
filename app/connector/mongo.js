const mongoose = require ('mongoose');
const {mongo} = require ('../../config');
const {host, port, database, options} = mongo;
//返回的是一个链接，必须使用db.model，因为mongoodb.model使用的是默认连接
// method one
// const db = mongoose.createConnection (
//   `mongodb://${host}:${port}/${db}`,
//   options
// );

//method two
const url = `mongodb://${host}:${port}/${database}`;
console.log (url, 11);
mongoose.connect (url, options);
const db = mongoose.connection;
db.on ('open', () => {
  console.log ('open');
});
db.on ('error', err => {
  console.log (`error:`, err);
});
db.on ('disconnect', () => {
  console.log ('disconnect');
});
db.on ('connect', () => {
  console.log ('connect');
});
module.exports = db;
