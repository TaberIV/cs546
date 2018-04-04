const path = require("path");

function constructorMethod(app) {
	app.use("/", (req, res) => {
		var data = {
			title: "The Best Palindrome Checker in the World!"
		};
		res.render("form", data);
	});

	app.use("*", (req, res) => {
		res.status(404).json({error: "Route not found."});
	});
};

module.exports = constructorMethod;