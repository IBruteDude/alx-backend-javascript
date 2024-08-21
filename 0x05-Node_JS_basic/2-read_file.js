#!/usr/bin/node
const { readFileSync } = require('node:fs');

module.exports = (dbpath) => {
  let fd;
  try {
    fd = readFileSync(dbpath);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const input = fd.toString();
  let rows = input
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .map((line) => line.split(','));
  const fields = {};

  rows = rows.slice(1);
  for (const row of rows) {
    if (fields[row[3]]) fields[row[3]].push(row[0]);
    else fields[row[3]] = [row[0]];
  }

  console.log(`Number of students: ${rows.length}`);
  for (const field in fields) {
    if (field) console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  }
};
