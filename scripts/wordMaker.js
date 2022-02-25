function wordMaker(name, ncFileName) {
  console.log(
    `Hello from wordMaker. We are going to engrave ${name} and the filename is ${ncFileName} `
  )

  const template = require("../templates/template1.json")
  const fs = require("fs")
  const text = name
  const widthSlot1 = 30

  var totalWidthOfText = 0
  for (let i of text) {
    var totalWidthOfText = totalWidthOfText + template[i].width
  }

  var spaceInX = (widthSlot1 - totalWidthOfText) / 2

  //This "double for" space the letters in x an centers them ;)
  for (let i of text) {
    for (let j = 0; j < template[i].values.length; j++) {
      let a = template[i].values[j]
      let b = parseFloat(a.match(/(?<=X)\d.\d\d\d/))
      let c = b + spaceInX
      let d = a.replace(/(?<=X)\d.\d\d\d/, c.toFixed(3))

      //These 3 lines append the current line to the file:

      fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, d, function (err) {
        if (err) throw err
      })
    }
    spaceInX = spaceInX + template[i].width
  }
}

exports.wordMaker = wordMaker
