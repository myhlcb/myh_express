const express = require ('express');
const router = express.Router ();
const uuid = require ('uuid');
const {credit} = require ('./model/mongo/cresit_schema');
const {csv} = require ('./script/json2csv');
const {poolAsync} = require ('./connector/mysql');
router.get ('/test', (req, res, next) => {
  console.log (req.session, 1);
  req.session.user = 'a';
  console.log (req.session, 2);
  res.send ('hello');
});
router.post ('/credit', async (req, res, next) => {
  const obj = {
    credit_uuid: uuid.v4 (),
    goods_name: '2aaaa',
    mobile: 2,
    email: 4,
  };
  const body = await credit.create (obj);
  // console.log (body.full_name_info);
  res.send (body);
});
router.post ('/bill', async (req, res, next) => {
  await poolAsync (`insert into bills set email=??`, ['1111']);
  const result = await poolAsync (`select * from bills`);
  res.send (result);
});
router.get ('/', function (req, res, next) {
  res.render ('index', {title: 'Express'});
});
router.get ('/csv', (req, res, next) => {
  res.attachment ('测试.csv');
  res.send (csv);
});
module.exports = router;
