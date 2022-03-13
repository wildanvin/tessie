function line1(heightSlot, input1) {
  const templateSelector = require("./templateSelector")

  const template = require(`../templates/${templateSelector.line1()}`)
  const letterHeight = template[input1[0]].height

  return (heightSlot - letterHeight) / 2
}

function line2(heightSlot, input1, input2) {
  const templateSelector = require("./templateSelector")

  const template1 = require(`../templates/${templateSelector.line2()[0]}`)
  const template2 = require(`../templates/${templateSelector.line2()[1]}`)
  const letterHeight1 = template1[input1[0]].height
  const letterHeight2 = template2[input2[0]].height

  console.log(`height1: ${letterHeight1} and height2: ${letterHeight2}`)
  let b = (heightSlot - letterHeight1 - letterHeight2) / 3
  let a = 2 * b + letterHeight2
  console.log(a, b)
  return [a, b]
}

exports.line1 = line1
exports.line2 = line2
