const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

/* GET users listing. */
router.get("/class", adminController.viewStudent);

module.exports = router;