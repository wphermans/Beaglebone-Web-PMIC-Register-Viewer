var express = require('express');
var path 	= require('path');
var app		= express();
var server	= require('http').Server(app);
var ws 		= require('socket.io')(server);
var port 	= 8080;

var pmic = require('./pmic.js');

app.use(express.static(path.join(__dirname, "public")));

ws.on('connection', function(socket){
	socket.emit('connection-status');

	socket.on('pmic-read', function(obj){
		var addr = parseInt(obj.toString());
		pmic.read(addr, function(data){
			socket.emit('pmic-register', {
				address: addr.toString(),
				register: data.toString()
			});
		});
	});

});

server.listen(port, function(){
	process.stdout.write('listening on port ' + port + '\n');

});