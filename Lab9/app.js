/****************************************
 * CS546 Lab8
 * Author: E. Taber McFarlin
 * 
 * I pledge my honor that I have abided
 * by the Stevens Honor System
 ***************************************/

var express = require('express');
var exphbs = require('express-handlebars');
var morgan = require('morgan');
var constructorMethod = require('./routes');
var app = express();

app.use(morgan('dev'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'), 'public');
constructorMethod(app);

app.listen(3000, () => {
	console.log("Server launched...");
	console.log("Routes running on http://localhost:3000");
});
