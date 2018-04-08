const express = require("express");
const router = express.Router();
const userData = require("../data/users");

router.post("/", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	
	var authenticated = false;

	try {
		authenticated = await userData.checkCredentials(username, password);
	} catch (e) {
		console.log(e);
		authenticated = false;
	}

	if (authenticated) {
		res.redirect("/private");
		// document.cookie = `username=${req.body.username}`;
	} else {
		// Todo Add error message
		res.redirect("/");
	}
});

module.exports = router;