const express = require('express');
const router = express.Router();
const education = require("../");

router.get('/', (req, res) => {
    res.render('palindromes');
});

module.exports = router;