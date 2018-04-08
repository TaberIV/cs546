const express = require("express");
const router = express.Router();
const userData = require("../data/users");

router.get("/", async (req, res) => {
	var data = {
		title: "Error: 403",
		description: "User is not logged in."
	}
	res.status(403).render("error", data);

	var authenticated;
	try {
		authenticated = document.cookie && document.cookie.username;
		const username = document.cookie.username;
		const user = await userData.getUserByUsername(username);
	} catch (e) {
		console.log(e);
		authenticated = false;
	}

	if (authenticated) {
		data = {
			title: "User Info",
			user: user
		}

		res.render("private", data);
	}
});

module.exports = router;