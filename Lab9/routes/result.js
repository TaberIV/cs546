const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	var data = {
		title: "Error: 400",
		description: "You must enter text to test."
	}
	res.status(400).render("error", data);
});

router.post("/", (req, res) => {
	if (req.body['text-to-test']) {
		const palindrome = checkPalindrome(req.body['text-to-test']);

		var data = {
			title: "The Palindrome Results!",
			text: req.body['text-to-test'],
			palindrome: palindrome,
			class: palindrome ? "success" : "failure"
		};

		res.render("result", data);
	} else {
		var data = {
			title: "Error: 400",
			description: "You must enter text to test."
		}
		res.status(400).render("error", data);
	}
});

function checkPalindrome(text) {
	text = text.replace(/[^\w]/g, '').toLowerCase();
	
	var i = 0;
	var j = text.length - 1;

	while (i < j) {
		if (text[i] != text[j])
			return false;
		i++;
		j--;
	}

	return true;
}

module.exports = router;