/****************************************
 * CS546 Lab8
 * Author: E. Taber McFarlin
 * 
 * I pledge my honor that I have abided
 * by the Stevens Honor System
 ***************************************/

const express = require("express");
const app = express();
const static = express.static(__dirname + '/public');
const bodyParser = require("body-parser");

const configRoutes = require("./routes");
const exphbs = require("express-handlebars");

app.use("/public", static);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: true
}));

configRoutes(app);

app.listen(3000, () => {
	console.log("Server launched...");
	console.log("Routes running on http://localhost:3000");
});
