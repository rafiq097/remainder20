const express = require("express");
const router = express.Router();

const { registerEmail } = require("../controllers/email.controller.js");

router.post("/register", registerEmail);

module.exports = router;