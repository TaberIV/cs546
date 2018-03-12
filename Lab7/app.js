const express = require("express");
const app = express();
const configRoutes = require("./routes");
const body_parser = require('body-parser');

app.use(body_parser.json());
configRoutes(app);

app.listen(3000, () => {
	console.log("Server launched...");
	console.log("Routes running on http://localhost:3000");
});