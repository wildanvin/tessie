/**
 * This snippet takes all the nc files and puts them together in a json file**/

let letters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  'Á',
  'É',
  'Í',
  'Ó',
  'Ú',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'Ñ',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

var fs = require('fs')

const template = require('./template2.json')

for (let el of letters) {
  var fileName = `./${el}.nc` // path to file

  console.log(fileName)

  fs.readFile(fileName, 'utf8', function (err, data) {
    let splitArray = data.split('\n')
    splitArray.splice(-2, 2) //delete last 2 rows
    splitArray.splice(0, 3) // delete first 3 rows

    for (let i = 0; i < splitArray.length; i++) {
      let a = splitArray[i].replace(/(?<=F)\d\d\d.\d/, '200.0') //Change the feed rate to 200.0
      splitArray[i] = a + '\n' //Add new line at the end
    }

    template[el]['values'] = splitArray
    //console.log(template)
    var jsonContent = JSON.stringify(template)

    fs.writeFile('./template2.json', jsonContent, 'utf8', function (err) {
      if (err) {
        console.log('An error occured while writing JSON Object to File.')
        return console.log(err)
      }

      console.log('JSON file has been saved.')
    })
  })
}
