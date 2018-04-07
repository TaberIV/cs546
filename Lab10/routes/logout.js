const express = require("express");
const router = express.Router();

router.get("/", (res, req) => {
	var data = {
		title: "Logout"
	}
	
	authenticated = false; // Replace with cookie expiration

	res.render("logout", data);	
});

module.exports = router;