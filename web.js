var fs = require('fs');      
var express = require('express');

var app = express.createServer(express.logger());

var tempBuffer = fs.readFileSync('index.html', 'utf8');
//var buf= new Buffer(tempBuffer.length, 'utf8');

//console.log(buf.toString('utf8', 0, tempBuffer.length));
app.get('/', function(request, response) {
  response.send(tempBuffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
