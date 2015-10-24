var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect(); 

app.use(
	serveStatic("angularjs")
).listen(5000);

