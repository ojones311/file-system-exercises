const fs = require('fs')

// fs.writeFile('./message.txt', 'Hello World', (err, data) => {
//     if(err){
//         console.log('Error', err)
//     }

//     console.log('File written', data)
// })

let todoList = 'Clean my room \n Make breakfast \n Go to the gym \n Do Laundry \n'

fs.writeFile('./todolist.txt', todoList, (err, data) => {
    if(err){
        console.log('Error', err)
    }
    console.log('File written', data)
})