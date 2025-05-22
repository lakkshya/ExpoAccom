const express = require("express");
const { submitContactForm } = require("../controllers/contactController");

const router = express.Router();

//POST
router.post("/", submitContactForm);

module.exports = router;
