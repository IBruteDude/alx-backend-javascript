#!/usr/bin/node
const { readFile } = require('node:fs');

function getStudentInfo(dbpath) {
  return new Promise((res) => {
    (readFile(dbpath, (error, data) => {
      if (error) throw new Error('Cannot load the database');

      const input = data.toString();
      const rows = input
        .split('\n')
        .filter((line) => line.trim().length > 0)
        .map((line) => line.split(','));
      const fields = {};

      for (const row of rows.slice(1)) {
        if (fields[row[3]]) fields[row[3]].push(row[0]);
        else fields[row[3]] = [row[0]];
      }

      let studentInfo = `Number of students: ${rows.length - 1}\n`;

      for (const field in fields) {
        if (field) studentInfo += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }

      res(studentInfo.slice(0, -1));
    }));
  });
}

module.exports = (dbpath) => getStudentInfo(dbpath).then((data) => console.log(data));
module.exports.getStudentInfo = getStudentInfo;
