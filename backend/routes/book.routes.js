let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();


let bookSchema = require('../models/Book');

router.route('/AddBook').post((req, res, next) => {
  bookSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});