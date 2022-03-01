const express = require("express")
const path = require("path")
const { v1: uuidv1 } = require("uuid")

const gCodeGen = require("./scripts/gCodeGen")
const sendGCode = require("./scripts/sendGCode")

const app = express()

// Body parser middleware
app.use(express.urlencoded({ extended: false }))

// Set static folder
app.use(express.static(path.join(__dirname, "public")))

app.post("/engraveSlot1", (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList

  //console.log("hello from server.js", line1, line2, numberOfLines)
  //console.log(req.body)
  global.ncFileName = uuidv1()
  gCodeGen.engraveSlot1(line1, line2, ncFileName, numberOfLines)

  res.end()
})

app.post("/engraveSlot2", (req, res) => {
  const name = req.body.name
  global.ncFileName = uuidv1()
  gCodeGen.engraveSlot2(name, ncFileName)
  res.end()
})

app.post("/engraveSlot3", (req, res) => {
  const name = req.body.name
  global.ncFileName = uuidv1()
  gCodeGen.engraveSlot3(name, ncFileName)
  res.end()
})

app.post("/engraveSlot4", (req, res) => {
  const name = req.body.name
  global.ncFileName = uuidv1()
  gCodeGen.engraveSlot4(name, ncFileName)
  res.end()
})

app.post("/sendGCode", (req, res) => {
  sendGCode.sendGCode(ncFileName)
  res.end()
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
