const mongoose = require('mongoose'); //for MongoDB

const productSchema = mongoose.Schema({
  //Create a schema for MongoDB
  _id: mongoose.Schema.Types.ObjectId, //Create ID for object
  name: { type: String, require: true },
  price: { type: Number, require: true },
  //productImage: { type: String, require: false },
});

//What module to use and export. 1st argument is internal name
//2ns argument in the schema used (for constructor?)
module.exports = mongoose.model('Product', productSchema);
