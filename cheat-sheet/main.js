const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('./index.html', (err, content) => {
    res.end(content);
  });
});

server.listen(port, hostname, () => {
  console.log(`magic happens at http://${hostname}:${port}/`);
});
