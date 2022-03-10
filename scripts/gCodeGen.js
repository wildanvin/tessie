function engraveSlot1(line1, line2, ncFileName, numberOfLines) {
  const fs = require("fs")
  const wordMaker = require("./wordMaker")
  const settings = require("../settings/settings.json")

  const widthSlot1 = settings.tag1.width

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X${settings.tag1.startX} Y${settings.tag1.startY} F228
G0 Z${settings.tag1.startZ} F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000
`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  //The spaceInY parameter of the "wordmaker" function is different for each tag
  //In the future I plan that it will be automtically calculated depending of the height of each tag
  //For now you have to enter this values manually
  if (numberOfLines == "2lines") {
    wordMaker.wordMaker(widthSlot1, 9.0, line1, ncFileName)
    wordMaker.wordMaker(widthSlot1, 4.5, line2, ncFileName)
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot1, 9.5, line1, ncFileName)
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

function engraveSlot2(line1, line2, ncFileName, numberOfLines) {
  const fs = require("fs")
  const wordMaker = require("./wordMaker")
  const settings = require("../settings/settings.json")

  const widthSlot2 = settings.tag2.width

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X${settings.tag2.startX} Y${settings.tag2.startY} F228
G0 Z${settings.tag2.startZ} F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000
`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  //The spaceInY parameter of the "wordmaker" function is different for each tag
  //In the future I plan that it will be automtically calculated depending of the height of each tag
  //For now you have to enter this values manually
  if (numberOfLines == "2lines") {
    wordMaker.wordMaker(widthSlot2, 9.5, line1, ncFileName)
    wordMaker.wordMaker(widthSlot2, 5.5, line2, ncFileName)
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot2, 7, line1, ncFileName)
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

function engraveSlot2OLD(line1, line2, ncFileName, numberOfLines) {
  const wordMaker = require("./wordMaker")
  const fs = require("fs")
  const widthSlot1 = 30

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X-131.400 Y63.500 F228
G0 Z-11.700 F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000
`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  if (numberOfLines == "2lines") {
    wordMaker.wordMaker(widthSlot1, 8.0, line1, ncFileName, "line1")
    wordMaker.wordMaker(widthSlot1, 8.0, line2, ncFileName, "line2")
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot1, 3.0, line1, ncFileName, "line1")
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

function engraveSlot3(line1, line2, ncFileName, numberOfLines) {
  const wordMaker = require("./wordMaker")
  const fs = require("fs")
  const widthSlot1 = 30

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X-131.400 Y63.500 F228
G0 Z-11.700 F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000
`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  if (numberOfLines == "2lines") {
    wordMaker.wordMaker(widthSlot1, 8.0, line1, ncFileName, "line1")
    wordMaker.wordMaker(widthSlot1, 8.0, line2, ncFileName, "line2")
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot1, 3.0, line1, ncFileName, "line1")
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

function engraveSlot4(line1, line2, ncFileName, numberOfLines) {
  const wordMaker = require("./wordMaker")
  const fs = require("fs")
  const widthSlot1 = 30

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X-131.400 Y63.500 F228
G0 Z-11.700 F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000
`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  if (numberOfLines == "2lines") {
    wordMaker.wordMaker(widthSlot1, 8.0, line1, ncFileName, "line1")
    wordMaker.wordMaker(widthSlot1, 8.0, line2, ncFileName, "line2")
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot1, 3.0, line1, ncFileName, "line1")
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

function engraveSlot5(line1, line2, ncFileName, numberOfLines) {
  const wordMaker = require("./wordMaker")
  const fs = require("fs")
  const widthSlot1 = 30

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X-131.400 Y63.500 F228
G0 Z-11.700 F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000
`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  if (numberOfLines == "2lines") {
    wordMaker.wordMaker(widthSlot1, 8.0, line1, ncFileName, "line1")
    wordMaker.wordMaker(widthSlot1, 8.0, line2, ncFileName, "line2")
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot1, 3.0, line1, ncFileName, "line1")
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

function engraveSlot6(line1, line2, ncFileName, numberOfLines) {
  const wordMaker = require("./wordMaker")
  const fs = require("fs")
  const widthSlot1 = 30

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X-131.400 Y63.500 F228
G0 Z-11.700 F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000
`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  if (numberOfLines == "2lines") {
    wordMaker.wordMaker(widthSlot1, 8.0, line1, ncFileName, "line1")
    wordMaker.wordMaker(widthSlot1, 8.0, line2, ncFileName, "line2")
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot1, 3.0, line1, ncFileName, "line1")
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

function engraveSlot7(line1, line2, ncFileName, numberOfLines) {
  const wordMaker = require("./wordMaker")
  const fs = require("fs")
  const widthSlot1 = 30

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X-131.400 Y63.500 F228
G0 Z-11.700 F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000
`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  if (numberOfLines == "2lines") {
    wordMaker.wordMaker(widthSlot1, 8.0, line1, ncFileName, "line1")
    wordMaker.wordMaker(widthSlot1, 8.0, line2, ncFileName, "line2")
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot1, 3.0, line1, ncFileName, "line1")
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

function engraveSlot8(line1, line2, ncFileName, numberOfLines) {
  const wordMaker = require("./wordMaker")
  const fs = require("fs")
  const widthSlot1 = 30

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X-131.400 Y63.500 F228
G0 Z-11.700 F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000
`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  if (numberOfLines == "2lines") {
    wordMaker.wordMaker(widthSlot1, 8.0, line1, ncFileName, "line1")
    wordMaker.wordMaker(widthSlot1, 8.0, line2, ncFileName, "line2")
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot1, 3.0, line1, ncFileName, "line1")
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
exports.engraveSlot5 = engraveSlot5
exports.engraveSlot6 = engraveSlot6
exports.engraveSlot7 = engraveSlot7
exports.engraveSlot8 = engraveSlot8
