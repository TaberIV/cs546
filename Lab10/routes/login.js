const express = require("express");
const router = express.Router();
const userData = require("../data/users");

router.post("/", async (req, res) => {
	try {
		var authenticated = await userData.checkCredentials(req.body.username, req.body.password);
	} catch (e) {
		console.log(e);
	}

	if (authenticated) {
		// Todo create cookie
		res.redirect("/private");
	} else {
		// Todo Add error message
		res.redirect("/");
	}
});

module.exports = router;