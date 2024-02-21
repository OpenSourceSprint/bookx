const express = require("express");
const {
  getAllBooksController,
} = require("../../controllers/books/getAllbooks");
const router = express.Router();

router.get("/all", getAllBooksController);

module.exports = router;
