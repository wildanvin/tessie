//This snippet replaces the values of a template JSON file with an empty array
const template = require("./template2.json")
const fs = require("fs")

for (let i in template) {
  template[i]["values"] = []
  template[i]["width"] = 0
}

var jsonContent = JSON.stringify(template)

fs.writeFile("./template2.json", jsonContent, "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.")
    return console.log(err)
  }

  console.log("JSON file has been saved.")
})
