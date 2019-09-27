const {Schema} = require ('mongoose');
const db = require ('../../connector/mongo');
const CreditSchema = new Schema (
  {
    credit_uuid: String,
    goods_name: String,
    add_info: {
      code: String,
      phone: String,
    },
    mobile: String,
    email: {type: String, default: ''},
  },
  {
    timestamps: {createdAt: 'created_at', updateAt: 'update_at'},
    toJSON: {virtual: true},
  }
);
CreditSchema.virtual ('full_name_info').get (function () {
  console.log (111);
  return this.goods_name + this.credit_uuid;
});
const Credit = db.model ('Credit', CreditSchema, 'credit');

exports = module.exports = {
  credit: Credit,
};
