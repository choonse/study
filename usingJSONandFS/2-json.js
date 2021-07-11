const fs = require('fs')

const file = fs.readFileSync('1-json.json')
const json = file.toString()
const readFile = JSON.parse(json)
console.log(readFile)

readFile.title = 'educated'
readFile.author = 'tara westover'

console.log(readFile)

const JSONstr = JSON.stringify(readFile)
fs.writeFileSync('2-json.json', JSONstr)
