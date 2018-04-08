var http = require('http');
//IDK LOL
function onRequest(request, response){
  console.log("A user made a request:" + request.url);
  response.writeHead(200, {"Context-Type": "text/plain"});
  response.write("Here's some data");
  response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is running...");
