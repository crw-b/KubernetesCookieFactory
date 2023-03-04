var http = require('http');
var handleRequest = function(req, res) {
    response.writeHead(200);
    response.end("Hello World!");
}
var www = http.createServer(handleRequest);
www.listen(8080);