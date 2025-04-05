const http = require('http');

const server = http.createServer((req, res) => {
res.end("Hi, congrats on your first server! :)");
}) 

server.listen(8000);

  console.log("Server running at port 8000");