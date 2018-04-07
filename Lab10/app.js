/***************************************
 * CS546 Lab10
 * Author: E. Taber McFarlin
 * 
 * I pledge my Honor that I have abided
 * by the Stevens Honor System.
***************************************/

// Imports
var express = require('express');
var exphbs =  require('express-handlebars')
var configRoutes = require('./routes');
const bodyParser = require("body-parser");

// Config app
var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
configRoutes(app);

app.listen(3000, () => {
	console.log("Server launched...");
	console.log("Routes running on http://localhost:3000");

	// You're welcome Rob
	if (process && process.send) process.send({done: true});
});
