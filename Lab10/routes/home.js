const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	var authenticated = false; // Replace with cookie checking

	if (authenticated)
		res.redirect('/private');
	else {
		var data = {
			title: "Home"
		}
		res.render('index', data);
	}
});

module.exports = router;