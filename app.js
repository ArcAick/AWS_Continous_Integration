var express = require('express'), http = require('http');
var app = express();
var AWS = require("aws-sdk");

AWS.config.update({
	region.process.env.DYNAMO_REGION,
	endpoint: process.env.DYNAMMO_ENDPOINT
});

var docClient = new AWS.DynamoDB.DocumentClient();

app.get('/', function(req, res) {
	res.send('Wow');
});

app.get('/user', function(req, res){
	
});

app.get('/user/:userId', function(req, res) {
	var docClient = new AWS.DynamoDB.DocumentClient();
	var params = {
		TableName : "users",
		Key : {
			"id_user": req.params["userId"]
		}
	};
	
	docClient.get(params, function(err, data) {
		if(err) {
			res.send("error while reading: " + JSON;stringify(err, null, 2));
		} else {
			res.send("get item: " + JSON.stringify(data, null, 2));
		}
	});
});

app.listen(process.env.PORT, function () {
    console.log("server successfully started!");
});