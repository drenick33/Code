const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');
const order = require('../models/order');
const product = require('../models/product');
const { request } = require('../../app');

router.get('/', (req, res, next) => {
  order
    .find()
    .select('product quantity _id')
    .populate('product', 'name price') //adds other keys from product construct (name, price). Not just _id [2nd arg is what to add]
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        orders: docs.map((doc) => {
          return {
            _id: doc._id,
            product: doc.product,
            quantity: doc.quantity,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/orders/' + doc.id,
            },
          };
        }),
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.post('/', (req, res, next) => {
  product
    .findById(req.body.productID)
    .then((product) => {
      if (!product) {
        //Runs if product is null
        return res.status(404).json({
          message: 'Product not found',
        });
      }
      const order = new Order({
        //use model as constructor
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productID,
      });
      return order.save().then((result) => {
        console.log(result),
          res.status(201).json({
            message: 'Created Order',
            createdOrder: {
              _id: result._id,
              product: result.product,
              quantity: result.quantity,
            },
            request: {
              type: 'GET',
              url: 'http://localhost:3000/orders' + result._id,
            },
          });
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Product not found',
        error: err,
      });
    });
});

router.get('/:orderId', (req, res, next) => {
  order
    .findById(req.params.orderId)
    .populate('product', 'name price')
    .exec()
    .then((order) => {
      if (!order) {
        res.status(404).json({
          message: 'Order not found',
        });
      }
      res.status(200).json({
        order: order,
        request: {
          type: 'GET',
          urls: 'http://localhost:3000/orders/',
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.delete('/:orderId', (req, res, next) => {
  order
    .deleteOne({ _id: req.params.orderId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'Order deleted',
        request: {
          type: 'POST',
          url: 'http://localhost:3000/orders/',
          body: { productID: 'ID', quantity: 'Number' },
        },
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
