const express = require("express");
const router = express.Router();

const { registerEmail, checkUser, deleteEmail } = require("../controllers/email.controller.js");

router.post("/register", registerEmail);
router.post("/check", checkUser);
router.get("/delete/:email", deleteEmail);

module.exports = router;