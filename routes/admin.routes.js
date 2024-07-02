const express = require("express");
const router = express.Router();

const { emailsList, newEmails } = require("../controllers/admin.controller.js");

router.get("/emails", emailsList);
router.get("/new-emails", newEmails);

module.exports = router;