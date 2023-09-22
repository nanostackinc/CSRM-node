const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

/* GET users listing. */
router.get("/dashboard", adminController.viewDashboard);
router.get("/class", adminController.viewStudent);
router.get("/laporan", adminController.viewLaporan);

module.exports = router;
