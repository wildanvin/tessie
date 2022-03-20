//This snippet changes the heights of a template JSON file
const template = require("./template2.json")
const fs = require("fs")
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i in template) {
  if (numbers.indexOf(Number(i)) == -1) {
    //change the height of letters
    template[i]["height"] = 2.7
  } else {
    //change the height og numbers
    template[i]["height"] = 2.5
  }
}

var jsonContent = JSON.stringify(template)

fs.writeFile("./template2.json", jsonContent, "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.")
    return console.log(err)
  }

  console.log("JSON file has been saved.")
})
