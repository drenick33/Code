const mongoose = require('mongoose'); //for MongoDB

const orderSchema = mongoose.Schema({
  //Create a schema for MongoDB
  _id: mongoose.Schema.Types.ObjectId, //Create ID for object
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    require: true,
  }, //have product be schema 'product'
  quantity: { type: Number, default: 1 }, //quantity=1 unless otherwise stated
});

//What module to use and export. 1st argument is internal name
//2ns argument in the schema used (for constructor?)
module.exports = mongoose.model('Order', orderSchema);
