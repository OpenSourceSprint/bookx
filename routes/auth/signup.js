const express = require("express");
const { signupController } = require("../../controllers/auth/signup");
const router = express.Router();

router.post("/signup", signupController);

module.exports = router;
