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


router.route('/').get((req, res) => {
  bookSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/EditBook/:id').get((req, res) => {
  bookSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
  
  
  
router.route('/UpdateBook/:id').put((req, res, next) => {
  bookSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
        console.log(error)
    } else {
      res.json(data)
      console.log('Book information was successfully updated')
    }
  })
})
  

router.route('/DeleteBook/:id').delete((req, res, next) => {
  bookSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
       return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
  
  module.exports = router;