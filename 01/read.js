const fs = require('fs');

fs.readFile('./my-files.txt', (err, file) => {
  if (err) {
    throw err;
  }

  const content = file.toString();
  console.log(content)
});
