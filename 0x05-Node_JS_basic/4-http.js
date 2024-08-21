#!/usr/bin/node
const http = require('node:http');

const app = http.createServer();
module.exports = app;

app.on('request', (_, res) => {
  res.writeHead(200);
  res.end('Hello Holberton School!');
});

app.listen(1245);
