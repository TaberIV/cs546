/***************************************
 * CS546 Lab10
 * Author: E. Taber McFarlin
 * 
 * I pledge my Honor that I have abided
 * by the Stevens Honor System.
***************************************/

// Imports
var express = require('express');
var expbhs =  require('express-handlebars')
var configRoutes = require('./routes');

// Config
var app = express();
app.set('view-engine', 'handlebars');

app.use(express.static(__dirname + 'public'));
configRoutes(app);

app.listen(3000, () => {
	console.log("Server launched...");
	console.log("Routes running on http://localhost:3000");
});