const fs = require('fs')


fs.readFile('./my-files.txt', (err, data) => {
  if (err) throw err
  let list = data.toString()
  let files = list.split('\n')

  let extensions = {}
  for (let file of files) {
    let fileSplit = file.split(' ')
    let ext = fileSplit[fileSplit.length - 1].split('.')[1]
    if (ext) {
      extensions[ext] = []
    }
  }
  
  for (let file of files) {
    let fileSplit = file.split(' ').filter(elem => elem !== '') // More elegant and simpler with regex file.split(/\s+/)
    let fileName = fileSplit.slice(8).join(' ') // The 9th column is where the name starts
    let ext = fileName.split('.')[1]

    if (ext) {
      extensions[ext].push(fileName)
    }
  }

  fs.writeFile('./files-ext-map.json', JSON.stringify(extensions, null, 1), (err, data) => {
    if (err) throw err
    console.log('Finished Writing File')
  })
})
