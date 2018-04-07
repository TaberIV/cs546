const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	var data = {
		title: "Private"
	}

	res.render("private", data);	
});

module.exports = router;