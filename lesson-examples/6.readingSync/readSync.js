const fs = require('fs');

const content = fs.readFileSync('./student.json')
const student = JSON.parse(content);
console.log('Finished Reading');

console.log(student)

console.log('When does this happen?');
