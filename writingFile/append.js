// apendfile.js
const fs = require('fs');

fs.appendFile(
  './message.txt',
  'I\'m a Web Developer',
  function (err) {
    if (err) {
      throw err;
    }
  }
);
