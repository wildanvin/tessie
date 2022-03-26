function sendGCodeV2(ncFileName) {
  var { exec } = require("child_process") // native in nodeJs

  const childProcess = exec("touch awesome_file.txt")
}

exports.sendGCodeV2 = sendGCodeV2
