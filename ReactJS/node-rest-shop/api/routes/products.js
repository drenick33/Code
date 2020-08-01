const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Product = require('../models/product'); //Get Mongo scheema (model) from other file
const product = require('../models/product');

const multer = require('multer'); //used to parse forum data [instead of req.body]

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //cb is callBack
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    //accept a file
    cb(null, true);
  } else {
    //reject a file
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 20, //20MB
  },
  fileFilter,
}); //Store all files in this directory

router.get('/', (req, res, next) => {
  product
    .find()
    .select('name price _id productImage')
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        products: docs.map((doc) => {
          return {
            name: doc.name,
            price: doc.price,
            _id: doc._id,
            productImage: doc.productImage,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/products/' + doc._id,
            },
          };
        }),
      };
      res.status(200).json(response);
    })

    // if (docs.length >= 0){   Commented part for if there's no products, return 404 error
    // }
    // else {
    //   res.status(404).json({message: "No Products"})
    // }
    .catch((err) => {
      console.log(err), res.status(500).json({ error: err });
    });
}); //doesn't need to be /products, since you'll already be in /products when accessing

//upload.single() - parse only one file; multer
router.post('/', upload.single('productImage'), (req, res, next) => {
  console.log(req.file); //from upload.single
  const product = new Product({
    _id: new mongoose.Types.ObjectId(), //Create new unique object id
    name: req.body.name,
    price: req.body.price,
    // productImage: req.file.path,
  });
  product
    .save() //Stores in database
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'product POST works!',
        createdProduct: {
          name: result.name,
          price: result.price,
          _id: result._id,
          request: {
            type: 'Post',
            url: 'http://localhost:3000/products/' + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err), res.status(500).json({ error: err });
    }); //catch errors
});

router.get('/:ProductID', (req, res, next) => {
  const id = req.params.ProductID; //Constant that stores the productID accessed
  Product.findById(id)
    .select('name price _id productImage')
    .exec()
    .then((doc) => {
      console.log('From database', doc);
      if (doc) {
        res.status(200).json(doc); //If this runs, the GET works
      } else {
        res.status(404).json({ message: 'ID not found' }); //If there's no error, but ID isn't found
      }
    })
    .catch((err) => {
      //If the code fails
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch('/:ProductID', (req, res, next) => {
  const id = req.params.ProductID;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  product
    .update(
      { _id: id },
      {
        $set: updateOps,
      }
    )
    .exec()
    .then((result) => {
      console.log(result), res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

/*
Example of a Patch request sent to /products/[ProductID]
Must be an array

[
    {
    "propName": "name", "value":  "Chocolate Cake"
    }
]
*/

router.delete('/:ProductID', (req, res, next) => {
  const id = req.params.ProductID;
  product
    .deleteOne({ _id: id })
    .exec()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err), res.status(500).json({ error: err });
    });
});

module.exports = router;
