const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
	var authenticated = true; // Replace with checking username/password

	if (authenticated)
		res.redirect("/private");
	else
		res.redirect("/");
});

module.exports = router;