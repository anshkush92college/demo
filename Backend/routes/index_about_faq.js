const express = require("express");
const router = express.Router();

// Debug ---------------------------------------------------------- URL --> localhost:3000/ ----------------------------------------------
router.get("/", function (req, res) {
    res.render("index");
})

// Debug ---------------------------------------------------------- URL --> localhost:3000/faq -----------------------------------------
router.get("/faq", function (req, res) {
    res.render("faq");
})

// Test ------------------------------------------------------------ Exporting this file code -----------------------------------------
module.exports = router;
