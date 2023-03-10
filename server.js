const http = require('http');
const handleRequest = function(request, response) {
    console.log("Requesting a Hello")
    response.writeHead(200);
    response.end("Hello World!");
}
const www = http.createServer(handleRequest);
www.listen(8080);