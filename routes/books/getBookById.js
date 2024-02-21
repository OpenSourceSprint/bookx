const express = require("express");
const {
  getBookByIdController,
} = require("../../controllers/books/getBookById");

const router = express.Router();

router.get("/:id", getBookByIdController);

module.exports = router;
