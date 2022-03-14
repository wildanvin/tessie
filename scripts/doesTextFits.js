//This functions check if the text in the front end fits en the tag. If the text can fit it returns
//the template that better fits the text. If the text doesnt fit it returns false

function line1(line1, tagNumber) {
  const settings = require("../settings/settings.json")
  const widthSlot = settings[tagNumber]["realWidth"]

  const template = require("../templates/template1.json")

  var totalWidthOfText = 0
  for (let i of line1) {
    var totalWidthOfText = totalWidthOfText + template[i].width
  }
  console.log(
    `Total width of text is: ${totalWidthOfText} and the width of the tag is: ${widthSlot}`
  )

  if (totalWidthOfText >= widthSlot) {
    return false
  } else {
    return "template1.json"
  }
}

function line2(line1, line2, tagNumber) {
  const settings = require("../settings/settings.json")
  const widthSlot = settings[tagNumber]["realWidth"]

  const template = require("../templates/template1.json")

  var totalWidthOfText1 = 0
  var totalWidthOfText2 = 0

  for (let i of line1) {
    var totalWidthOfText1 = totalWidthOfText1 + template[i].width
  }

  for (let j of line2) {
    var totalWidthOfText2 = totalWidthOfText2 + template[j].width
  }

  console.log(
    `Total width of text1 is: ${totalWidthOfText1}, text2 is ${totalWidthOfText2} and the width of the tag is: ${widthSlot}`
  )

  if (totalWidthOfText1 >= widthSlot || totalWidthOfText2 >= widthSlot) {
    return false
  } else {
    return ["template1.json", "template1.json"]
  }
}

exports.line1 = line1
exports.line2 = line2
