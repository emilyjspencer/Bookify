const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  genre: {
    type: String
  },
  isbn: {
    type:  String
  }
}, {
    collection: 'books'
  })

module.exports = mongoose.model('Book', bookSchema)