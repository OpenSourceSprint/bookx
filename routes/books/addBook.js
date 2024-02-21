const express = require("express");
const { addBookController } = require("../../controllers/books/addBook");

const router = express.Router();

router.post("/", addBookController);

module.exports = router;
