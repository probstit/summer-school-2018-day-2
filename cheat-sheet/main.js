const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   console.log(req.url);
//   fs.readFile('./index.html', (err, content) => {
//     res.end(content);
//   });
// });

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   switch (req.url) {
//     case '/': {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/html');
//       fs.readFile('./index.html', (err, content) => {
//         res.end(content);
//       });
//       break;
//     }

//     case '/contact.html': {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/html');
//       fs.readFile('./contact.html', (err, content) => {
//         res.end(content);
//       });
//       break;
//     }

//     case '/style.css': {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/css');
//       fs.readFile('./style.css', (err, content) => {
//         res.end(content);
//       });
//       break;
//     }

//     case '/script.js': {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/javascript');
//       fs.readFile('./script.js', (err, content) => {
//         res.end(content);
//       });
//       break;
//     }

//     default: {
//       res.statusCode = 404;
//       res.setHeader('Content-Type', 'text/plain');
//       res.end('File does not exist on this server');
//     }
//   }
// });

const router = require('./router');
const server = http.createServer(router);

server.listen(port, hostname, () => {
  console.log(`magic happens at http://${hostname}:${port}/`);
});
