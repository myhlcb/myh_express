module.exports = {
  mongo: {
    host: 'localhost',
    port: '37017',
    database: 'credit',
    options: {},
  },
  pg: {
    host: 'localhost',
    port: '5432',
    database: 'credit',
    user: '',
    pass: '',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  mysqldb: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'myh_runoob',
  },
  redis: {
    host: 'localhost',
    port: 6379,
    db: 1,
  },
};
