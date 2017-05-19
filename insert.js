var express = require('express'), http = require('http');
var app = express();



var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database : process.env.RDS_DB_NAME
});

app.get('/movies', function (req, res) {
	connection.connect(function(err) {
	if (err) {
		console.error('Database connection failed: ' + err.stack);
		res.send('Database connection failed: ' + err.stack);
		return;
	}});
	console.log('Connected to database.');

	connection.req('INSERT INTO movies VALUES (1, "le chateau dans le ciel", "Animation")', function (error, results, fields) {
		connection.end();
		if (results !== undefined) {
			res.send(results);
		} else {
			res.send(error);
		}
	});
});

app.listen(process.env.PORT, function () {
    console.log("Eventually server successfully started!");
});