var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
//(req,res,next) --order matters
// logger logs out GET request

var middleware = require('./middleware.js');


//order is importsant put middleware up top
//app.use(middleware.requireAuthentication);

//req holds all in from user like url, cookies, json
//res is what we send back

app.use(middleware.logger);
app.get('/about', middleware.requireAuthentication, function (req,res) {
	res.send('About us!')
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(PORT, function() {
	console.log('Express server started on server ' + PORT);
});
