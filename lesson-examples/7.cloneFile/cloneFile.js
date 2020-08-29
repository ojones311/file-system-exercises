const fs = require('fs')


fs.readFile('../1.readingFile/my-files.txt', 'utf8', (err, data) => {
    if (err){
        console.log('err', err)
    }

    fs.writeFile('./newFile.txt', data, (err, data) => {
        if (err ){
            console.log('err', err)
        }
        
        console.log(data)
    })
})

