function line1(heightSlot, input1, _templateName1) {
  const template = require(`../templates/${_templateName1}`)
  const letterHeight = template[input1[0]].height

  return 1 + (heightSlot - letterHeight) / 2
}

function line2(heightSlot, input1, input2, _templateName1, _templateName2) {
  const template1 = require(`../templates/${_templateName1}`)
  const template2 = require(`../templates/${_templateName2}`)
  const letterHeight1 = template1[input1[0]].height
  const letterHeight2 = template2[input2[0]].height

  let b = (heightSlot - letterHeight1 - letterHeight2) / 3
  let a = 2 * b + letterHeight2

  return [a, b]
}

exports.line1 = line1
exports.line2 = line2
