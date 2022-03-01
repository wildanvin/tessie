function wordMaker(_widthSlot, spaceInY, input, ncFileName, lineNumber) {
  console.log(
    `Hello from wordMaker. We are going to engrave ${input} and the filename is ${ncFileName} `
  )

  const template = require("../templates/template1.json")
  const fs = require("fs")
  const text = input
  const widthSlot = _widthSlot

  var totalWidthOfText = 0
  for (let i of text) {
    var totalWidthOfText = totalWidthOfText + template[i].width
  }

  var spaceInX = (widthSlot - totalWidthOfText) / 2

  //This "double for" space the letters in x an centers them ;)
  for (let i of text) {
    for (let j = 0; j < template[i].values.length; j++) {
      let a = template[i].values[j]

      let b = parseFloat(a.match(/(?<=X)\d.\d\d\d/))
      let z = parseFloat(a.match(/(?<=Y)\d.\d\d\d/))

      let c = b + spaceInX
      let y = z + spaceInY

      if (lineNumber == "line1") {
        let d = a.replace(/(?<=X)\d.\d\d\d/, c.toFixed(3))
        let x = d.replace(/(?<=Y)\d.\d\d\d/, y.toFixed(3))

        fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, x, function (err) {
          if (err) throw err
        })
      } else if (lineNumber == "line2") {
        let d = a.replace(/(?<=X)\d.\d\d\d/, c.toFixed(3))

        fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, d, function (err) {
          if (err) throw err
        })
      }
    }
    spaceInX = spaceInX + template[i].width
  }
}

exports.wordMaker = wordMaker
