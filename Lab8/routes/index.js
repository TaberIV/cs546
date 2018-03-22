const path = require("path");
const resultRoute = require("./result");

function constructorMethod(app) {
	app.use("/result", resultRoute);

	app.use("/", (req, res) => {
		res.render("palindrome/form");
	});
};

module.exports = constructorMethod;