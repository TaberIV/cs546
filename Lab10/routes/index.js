const homeRoute = require("./home");
const loginRoute = require("./login");
const privateRoute = require("./private");
const logoutRoute = require("./logout");

function constructorMethod(app) {
	app.use("/", homeRoute);
	app.use("/login", loginRoute);
	app.use("/private", privateRoute);
	app.use("/logout", logoutRoute);

	app.use("*", (req, res) => {
		res.status(404).json({error: "Route not found."});
	});
};

module.exports = constructorMethod;