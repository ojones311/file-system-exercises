const fs = require('fs')


fs.readFile('./my-files.txt','utf8', (err, data) => {
    if(err){
        return console.log(err)
    }
    if(!data){
        console.log('File doesnt exist')
    }
    // const content = data.toString();
    // console.log(content)
    console.log(data.length)
})

