const express = require("express");
const { deleteBookController } = require("../../controllers/books/deleteBook");

const router = express.Router();

router.delete("/delete/:id", deleteBookController);

module.exports = router;
