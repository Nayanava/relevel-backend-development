// const user = process.argv[2];
// console.log("Hello " + user)

const http = require('http')
const url = require('url');

http.createServer(function (request, response) {
    const queryObject = url.parse(request.url, true).query;
    console.log(queryObject);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello ' + queryObject.name);
    }).listen(3000);