const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	var data = {
		title: "The Best Palindrome Checker in the World!"
	};
	res.render("form", data);
});

module.exports = router;