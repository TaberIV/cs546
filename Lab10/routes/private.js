const express = require("express");
const router = express.Router();
const userData = require("../data/users");

router.get("/", async (req, res) => {
	// Replace with cookie checking
	const username = "masterdetective123";
	const user = await userData.getUserByUsername(username);
	authenticated = user != -1;

	if (authenticated) {
		const data = {
			title: "User Info",
			user: user
		}

		res.render("private", data);
	} else {
		res.status(403).json({error: "User is not logged in."}); // Make an error HTML
	}
});

module.exports = router;