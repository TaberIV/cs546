function constructorMethod(app) {
	app.use("/", () => {
		ar data = {
			title: "The Best Palindrome Checker in the World!"
		};
		res.render("form", data);
	});

	app.use("*", (req, res) => {
		res.status(404).json({error: "Route not found."});
	});
};

module.exports = constructorMethod;