const Redis = require ('ioredis');

const {host, port, db} = require ('../../config').redis;

const redis = new Redis ({host, port, db});
// redis.set ('foo', 'bar');
// redis.get ('foo', (err, result) => {
//   console.log (err, 1, result);
// });
module.exports = redis;
