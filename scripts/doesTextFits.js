//This functions check if the text in the front end fits en the tag. If the text can fit it returns
//the template that better fits the text. If the text doesnt fit it returns false

function line1(line1, tagNumber) {
  const settings = require("../settings/settings.json")
  const widthSlot = settings[tagNumber]["realWidth"]

  const template3 = require("../templates/template3.json")
  const template2 = require("../templates/template2.json")

  var totalWidthOfTextT3 = 0
  for (let i of line1) {
    var totalWidthOfTextT3 = totalWidthOfTextT3 + template3[i].width
  }

  var totalWidthOfTextT2 = 0
  for (let j of line1) {
    var totalWidthOfTextT2 = totalWidthOfTextT2 + template2[j].width
  }

  console.log(
    `Total width of textT3 is: ${totalWidthOfTextT3}
     Total width of textT2 is: ${totalWidthOfTextT2}
     and the width of the tag is: ${widthSlot}`
  )

  if (totalWidthOfTextT3 <= widthSlot) {
    return "template3.json"
  } else if (
    totalWidthOfTextT3 > widthSlot &&
    totalWidthOfTextT2 <= widthSlot
  ) {
    return "template2.json"
  } else if (totalWidthOfTextT2 > widthSlot) {
    return false
  }
}

function line2(line1, line2, tagNumber) {
  const settings = require("../settings/settings.json")
  const widthSlot = settings[tagNumber]["realWidth"]

  const template3 = require("../templates/template3.json")
  const template2 = require("../templates/template2.json")

  var totalWidthOfTextLine1T2 = 0
  var totalWidthOfTextLine1T3 = 0

  var totalWidthOfTextLine2T2 = 0
  var totalWidthOfTextLine2T3 = 0

  for (let i of line1) {
    var totalWidthOfTextLine1T2 = totalWidthOfTextLine1T2 + template2[i].width
  }

  for (let j of line1) {
    var totalWidthOfTextLine1T3 = totalWidthOfTextLine1T3 + template3[j].width
  }

  for (let k of line2) {
    var totalWidthOfTextLine2T2 = totalWidthOfTextLine2T2 + template2[k].width
  }

  for (let l of line2) {
    var totalWidthOfTextLine2T3 = totalWidthOfTextLine2T3 + template3[l].width
  }

  console.log(
    `Total width of text1T2 is: ${totalWidthOfTextLine1T2}
     Total width of text2T2 is: ${totalWidthOfTextLine2T2}
     Total width of text1T3 is: ${totalWidthOfTextLine1T3}
     Total width of text2T3 is: ${totalWidthOfTextLine2T3}
     and the width of the tag is: ${widthSlot}`
  )

  if (
    totalWidthOfTextLine1T2 > widthSlot ||
    totalWidthOfTextLine2T2 > widthSlot
  ) {
    return false
  } else if (
    totalWidthOfTextLine1T3 <= widthSlot &&
    totalWidthOfTextLine2T3 <= widthSlot
  ) {
    return ["template3.json", "template3.json"]
  } else if (
    totalWidthOfTextLine1T3 > widthSlot &&
    totalWidthOfTextLine1T2 <= widthSlot &&
    totalWidthOfTextLine2T3 <= widthSlot
  ) {
    return ["template2.json", "template3.json"]
  } else if (
    totalWidthOfTextLine1T3 <= widthSlot &&
    totalWidthOfTextLine2T3 > widthSlot &&
    totalWidthOfTextLine2T2 <= widthSlot
  ) {
    return ["template3.json", "template2.json"]
  } else if (
    totalWidthOfTextLine1T3 > widthSlot &&
    totalWidthOfTextLine1T2 <= widthSlot &&
    totalWidthOfTextLine2T3 > widthSlot &&
    totalWidthOfTextLine2T2 <= widthSlot
  ) {
    return ["template2.json", "template2.json"]
  }
}

exports.line1 = line1
exports.line2 = line2
