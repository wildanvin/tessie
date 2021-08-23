//This snippet makes an array of gcode so we can copy
//and paste the array in the json file
//We have to copy de array directly from the terminal
// I guess i will work in a better way later. But it works pretty nice :)

var fs = require("fs");
var fileName = "./Y.nc"; // path to file

fs.readFile(fileName, "utf8", function (err, data) {
  let splitArray = data.split("\n");
  splitArray.splice(-2, 2); //delete last 2 rows
  splitArray.splice(0, 3); // delete first 3 rows

  for (let i = 0; i < splitArray.length; i++) {
    let a = splitArray[i].replace(/(?<=F)\d\d\d.\d/, "200.0"); //Change the feed rate to 200.0
    splitArray[i] = a + "\n"; //Add new line at the end
  }

  var myJSON = JSON.stringify(splitArray);
  //console.log(splitArray);
  console.log(myJSON); //so we can copy the result from the console
});
