var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
console.log('Request was made:' + req.url);
res.writeHead(200, {'Content-Type': 'text/html' });
var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
readStream.pipe(res);
});

server.listen(3000);
console.log('listenin');
