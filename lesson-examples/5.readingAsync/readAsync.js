const fsPromises = require('fs').promises;

// async-await (needs wrapper async function)
const main = async () => {
  try {
    const data = await fsPromises.readFile('./student.json')
    const student = JSON.parse(data)
    console.log('First Read of Student =>')
    console.log(student)
  } catch (err) {
    console.log(err)
  }
}

main()

// .then()-.catch()
fsPromises.readFile('./student.json')
  .then(data => {
    const student = JSON.parse(data)
    console.log('Second Read of Student =>')
    console.log(student)
  })
  .catch(err => {
    console.log(err)
  })

// Note that in asynchronous code the order in which things happens in not guaranteed
