const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const book = JSON.parse(dataJSON)
// console.log(book.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
let data = JSON.parse(dataJSON)
data.name = "Diyoor"
data.age = "228"
const dataString = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataString)
