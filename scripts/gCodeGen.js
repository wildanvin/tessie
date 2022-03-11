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

function engraveSlot3(line1, line2, ncFileName, numberOfLines) {
  const fs = require("fs")
  const wordMaker = require("./wordMaker")
  const settings = require("../settings/settings.json")

  const widthSlot3 = settings.tag3.width

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X${settings.tag3.startX} Y${settings.tag3.startY} F228
G0 Z${settings.tag3.startZ} F228
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
    wordMaker.wordMaker(widthSlot3, 9.5, line1, ncFileName)
    wordMaker.wordMaker(widthSlot3, 5.5, line2, ncFileName)
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot3, 7, line1, ncFileName)
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
  const fs = require("fs")
  const wordMaker = require("./wordMaker")
  const settings = require("../settings/settings.json")

  const widthSlot4 = settings.tag4.width

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X${settings.tag4.startX} Y${settings.tag4.startY} F228
G0 Z${settings.tag4.startZ} F228
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
    wordMaker.wordMaker(widthSlot4, 7, line1, ncFileName)
    wordMaker.wordMaker(widthSlot4, 2.5, line2, ncFileName)
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot4, 5, line1, ncFileName)
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
  const fs = require("fs")
  const wordMaker = require("./wordMaker")
  const settings = require("../settings/settings.json")

  const widthSlot5 = settings.tag5.width

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X${settings.tag5.startX} Y${settings.tag5.startY} F228
G0 Z${settings.tag5.startZ} F228
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
    wordMaker.wordMaker(widthSlot5, 15, line1, ncFileName)
    wordMaker.wordMaker(widthSlot5, 10, line2, ncFileName)
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot5, 10, line1, ncFileName)
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
  const fs = require("fs")
  const wordMaker = require("./wordMaker")
  const settings = require("../settings/settings.json")

  const widthSlot6 = settings.tag6.width

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X${settings.tag6.startX} Y${settings.tag6.startY} F228
G0 Z${settings.tag6.startZ} F228
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
    wordMaker.wordMaker(widthSlot6, 8, line1, ncFileName)
    wordMaker.wordMaker(widthSlot6, 3, line2, ncFileName)
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot6, 7, line1, ncFileName)
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
  const fs = require("fs")
  const wordMaker = require("./wordMaker")
  const settings = require("../settings/settings.json")

  const widthSlot7 = settings.tag7.width

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X${settings.tag7.startX} Y${settings.tag7.startY} F228
G0 Z${settings.tag7.startZ} F228
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
    wordMaker.wordMaker(widthSlot7, 6, line1, ncFileName)
    wordMaker.wordMaker(widthSlot7, 1, line2, ncFileName)
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot7, 3, line1, ncFileName)
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
  const fs = require("fs")
  const wordMaker = require("./wordMaker")
  const settings = require("../settings/settings.json")

  const widthSlot8 = settings.tag8.width

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X${settings.tag8.startX} Y${settings.tag8.startY} F228
G0 Z${settings.tag8.startZ} F228
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
    wordMaker.wordMaker(widthSlot8, 14, line1, ncFileName)
    wordMaker.wordMaker(widthSlot8, 10, line2, ncFileName)
  } else if (numberOfLines == "1lines") {
    wordMaker.wordMaker(widthSlot8, 10, line1, ncFileName)
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
