const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>Hello, World!</h1> <p>Selamat datang di Node.js</p> <p>Node.js adalah platform yang digunakan untuk membangun aplikasi web dan server-side</p>');
  res.end();
}) 

server.listen(8000);

  console.log("Server running at port 8000");