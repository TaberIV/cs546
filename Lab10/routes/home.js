const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	var data = {title: "Home"};
	res.render('index', data);

	var authenticated = false;
	// try {
	// 	authenticated = document.cookie && document.cookie.username;
	// } catch (e) {
	// 	console.log(e);
	// 	authenticated = false;
	// }

	if (authenticated)
		res.redirect('/private');
});

module.exports = router;