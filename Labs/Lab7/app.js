const express = require("express");
const app = express();
const configRoutes = require("./routes");
const body_parser = require('body-parser');

app.use(body_parser.json());

configRoutes(app);

app.listen(3000, () => {
	console.log("We've now got a server!");
	console.log("Your routes will be running on http://localhost:3000");
});