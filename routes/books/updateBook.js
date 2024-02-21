const express = require("express");
const { updateBookController } = require("../../controllers/books/updateBook");

const router = express.Router();

router.put("update/:id", updateBookController);

module.exports = router;
