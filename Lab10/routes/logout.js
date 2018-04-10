const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	var data = {
		title: "Logout"
	}

	res.cookie("sessionID", "", {expires: new Date()});
	res.clearCookie("sessionID");

	res.render("logout", data);
});

module.exports = router;