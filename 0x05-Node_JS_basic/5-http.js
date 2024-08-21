#!/usr/bin/node
const { createServer } = require('node:http');
const { argv } = require('node:process');

const { getStudentInfo } = require('./3-read_file_async');

let studentInfo = '';

getStudentInfo(argv[2]).then(
  (data) => { studentInfo = data; },
);

const app = createServer();

module.exports = app;

app.on('request', (request, res) => {
  if (request.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    res.writeHead(200);
    res.end('This is the list of our students\n'.concat(studentInfo));
  } else {
    res.writeHead(404);
    res.end('File Not Found!');
  }
});

app.listen(1245);
