const xlsx = require ('node-xlsx');
const _ = require ('lodash');
const path = require ('path');
const {poolAsync} = require ('../connector/mysql');
const pathRoot = path.join (__dirname, '../../public/stastic/world.xlsx');

const data = _.get (xlsx.parse (pathRoot), '0.data');
poolAsync (`insert into world (country,area) values ?`, [data]);
