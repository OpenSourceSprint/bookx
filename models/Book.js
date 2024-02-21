const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  isbn: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  publishedOn: {
    type: Date,
  },
  pages: {
    type: Number,
    required: true,
  },
  website: {
    type: String,
  },
});

const Book = mongoose.model("book", BookSchema);

module.exports = { Book };
