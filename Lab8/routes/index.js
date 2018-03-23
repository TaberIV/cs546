const path = require("path");
const resultRoute = require("./result");
const formRoute = require("./form")

function constructorMethod(app) {
	app.use("/result", resultRoute);
	app.use("/", formRoute);

	app.use("*", (req, res) => {
		res.status(404).json({error: "Route not found."});
	});
};

module.exports = constructorMethod;