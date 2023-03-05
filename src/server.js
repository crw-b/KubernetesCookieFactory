const http = require('http');
const handleRequest = function(req, res) {
    response.writeHead(200);
    response.end("Hello World!");
}
const www = http.createServer(handleRequest);
www.listen(8080);