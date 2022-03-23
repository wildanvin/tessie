function generate(
  line1,
  line2,
  ncFileName,
  numberOfLines,
  _templateName1,
  _templateName2,
  _tagNumber
) {
  const fs = require("fs")
  const wordMaker = require("./wordMaker")
  const spacerInY = require("./spacerInY")
  const settings = require("../settings/settings.json")

  const widthSlot = settings[_tagNumber]["width"]

  let head = `$H
G10 P0 L20 X0 Y0 Z0
G21
G90
G0 X${settings[_tagNumber]["startX"]} Y${settings[_tagNumber]["startY"]} F228
G0 Z${settings[_tagNumber]["startZ"]} F228
G10 P0 L20 X0 Y0 Z0
G1 Z3.810 F76.2
M3 S8000
`

  fs.appendFileSync(`./ncFiles/${ncFileName}.nc`, head, function (err) {
    if (err) throw err
  })

  if (numberOfLines == "2lines") {
    let [a, b] = spacerInY.line2(
      settings[_tagNumber]["height"],
      line1,
      line2,
      _templateName1,
      _templateName2
    )
    wordMaker.wordMaker(widthSlot, a, line1, ncFileName, _templateName1)
    wordMaker.wordMaker(widthSlot, b, line2, ncFileName, _templateName2)
  } else if (numberOfLines == "1lines") {
    let c = spacerInY.line1(
      settings[_tagNumber]["height"],
      line1,
      _templateName1
    )
    wordMaker.wordMaker(widthSlot, c, line1, ncFileName, _templateName1)
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

exports.generate = generate
