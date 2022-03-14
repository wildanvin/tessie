const express = require("express")
const path = require("path")
const { v1: uuidv1 } = require("uuid")

const gCodeGen = require("./scripts/gCodeGen")
const sendGCode = require("./scripts/sendGCode")
const doesTextFits = require("./scripts/doesTextFits")

const app = express()

// Body parser middleware
app.use(express.urlencoded({ extended: false }))

// Set static folder
app.use(express.static(path.join(__dirname, "public")))

app.post("/engraveSlot1", (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList

  if (numberOfLines == "1lines") {
    let a = doesTextFits.line1(line1, "tag1")

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.engraveSlot1(line1, line2, ncFileName, numberOfLines, a)
    } else {
      return res.status(400).send("El texto es muy largo ")
    }
  }

  if (numberOfLines == "2lines") {
    let a = doesTextFits.line2(line1, line2, "tag1")

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.engraveSlot1(line1, line2, ncFileName, numberOfLines, a[0], a[1])
    } else {
      return res.status(400).send("El texto es muy largo ")
    }
  }

  res.sendStatus(200)
  res.end()
})

app.post("/engraveSlot2", (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList

  global.ncFileName = uuidv1()
  gCodeGen.engraveSlot2(line1, line2, ncFileName, numberOfLines)

  res.sendStatus(200)
  res.end()
})

app.post("/engraveSlot3", (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList

  global.ncFileName = uuidv1()
  gCodeGen.engraveSlot3(line1, line2, ncFileName, numberOfLines)

  res.sendStatus(200)
  res.end()
})

app.post("/engraveSlot4", (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList

  global.ncFileName = uuidv1()
  gCodeGen.engraveSlot4(line1, line2, ncFileName, numberOfLines)

  res.sendStatus(200)
  res.end()
})

app.post("/engraveSlot5", (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList

  global.ncFileName = uuidv1()
  gCodeGen.engraveSlot5(line1, line2, ncFileName, numberOfLines)

  res.sendStatus(200)
  res.end()
})

app.post("/engraveSlot6", (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList

  global.ncFileName = uuidv1()
  gCodeGen.engraveSlot6(line1, line2, ncFileName, numberOfLines)

  res.sendStatus(200)
  res.end()
})

app.post("/engraveSlot7", (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList

  global.ncFileName = uuidv1()
  gCodeGen.engraveSlot7(line1, line2, ncFileName, numberOfLines)

  res.sendStatus(200)
  res.end()
})

app.post("/engraveSlot8", (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList

  global.ncFileName = uuidv1()
  gCodeGen.engraveSlot3(line1, line2, ncFileName, numberOfLines)

  res.sendStatus(200)
  res.end()
})

app.post("/engraveSlot2OLD", (req, res) => {
  const name = req.body.name
  global.ncFileName = uuidv1()
  gCodeGen.engraveSlot2(name, ncFileName)
  res.end()
})

app.post("/engraveSlot3OLD", (req, res) => {
  const name = req.body.name
  global.ncFileName = uuidv1()
  gCodeGen.engraveSlot3(name, ncFileName)
  res.end()
})

app.post("/engraveSlot4OLD", (req, res) => {
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
