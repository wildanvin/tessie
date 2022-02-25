function engraveSlot1(name, ncFileName) {
  const wordMaker = require("./wordMaker")
  const fs = require("fs")

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X-131.400 Y63.500 F228
G0 Z-11.700 F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  wordMaker.wordMaker(name, ncFileName)

  let tail = `M05
G90 G0 X0 Y0
G90 G0 Z0
G4 P0.1
$H
G10 P0 L20 X0 Y0 Z0`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, tail, function (err) {
    if (err) throw err
  })
}

function engraveSlot2(name, ncFileName) {
  const template = require("../templates/template1.json")
  const fs = require("fs")
  const text = name
  const widthSlot2 = 25

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X-59.200 Y61.000 F228
G0 Z-12.490 F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  var totalWidthOfText = 0
  for (let i of text) {
    var totalWidthOfText = totalWidthOfText + template[i].width
  }

  var spaceInX = (widthSlot2 - totalWidthOfText) / 2

  /**This "double for" space the letters in x an centers them ;) */
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

  let tail = `M05
G90 G0 X0 Y0
G90 G0 Z0
G4 P0.1
$H
G10 P0 L20 X0 Y0 Z0`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, tail, function (err) {
    if (err) throw err
  })
}

function engraveSlot3(name, ncFileName) {
  const template = require("../templates/template1.json")
  const fs = require("fs")
  const text = name
  const widthSlot3 = 30

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X-133.9 Y23.000 F228
G0 Z-12.000 F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  var totalWidthOfText = 0
  for (let i of text) {
    var totalWidthOfText = totalWidthOfText + template[i].width
  }

  var spaceInX = (widthSlot3 - totalWidthOfText) / 2

  /**This "double for" space the letters in x an centers them ;) */
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

  let tail = `M05
G90 G0 X0 Y0
G90 G0 Z0
G4 P0.1
$H
G10 P0 L20 X0 Y0 Z0`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, tail, function (err) {
    if (err) throw err
  })
}

function engraveSlot4(name, ncFileName) {
  const template = require("../templates/template1.json")
  const fs = require("fs")
  const text = name
  const widthSlot4 = 35

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X-63.500 Y12.000 F228
G0 Z-11.8 F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  var totalWidthOfText = 0
  for (let i of text) {
    var totalWidthOfText = totalWidthOfText + template[i].width
  }

  var spaceInX = (widthSlot4 - totalWidthOfText) / 2

  /**This "double for" space the letters in x an centers them ;) */
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

  let tail = `M05
G90 G0 X0 Y0
G90 G0 Z0
G4 P0.1
$H
G10 P0 L20 X0 Y0 Z0`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, tail, function (err) {
    if (err) throw err
  })
}

exports.engraveSlot1 = engraveSlot1
exports.engraveSlot2 = engraveSlot2
exports.engraveSlot3 = engraveSlot3
exports.engraveSlot4 = engraveSlot4
