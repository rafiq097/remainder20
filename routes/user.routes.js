const express = require("express");
const router = express.Router();

const { registerEmail, checkUser } = require("../controllers/email.controller.js");

router.post("/register", registerEmail);
router.post("/check", checkUser);

module.exports = router;