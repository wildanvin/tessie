const express = require('express')
const path = require('path')
const { v1: uuidv1 } = require('uuid')

const gCodeGen = require('./scripts/gCodeGen')
const sendGCode = require('./scripts/sendGCode')

const doesTextFits = require('./scripts/doesTextFits')

const app = express()

// Body parser middleware
//Use the next line when submitting data from a form:
//app.use(express.urlencoded({ extended: false }))
//Use the next line when submitting JSON data with JS
app.use(express.json())

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.post('/test', (req, res) => {
  const line1 = req.body

  console.log(line1)
  let a = { text: 'hello ' }
  console.log('hello from test 22')
  res.send(a)
})

app.post('/engraveSlot1', (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList
  console.log(line1, line2, numberOfLines)

  if (numberOfLines == '1lines') {
    let a = doesTextFits.line1(line1, 'tag1')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(line1, line2, ncFileName, numberOfLines, a, NaN, 'tag1')
    } else {
      return res.sendStatus(400)
    }
  }

  if (numberOfLines == '2lines') {
    let a = doesTextFits.line2(line1, line2, 'tag1')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(
        line1,
        line2,
        ncFileName,
        numberOfLines,
        a[0],
        a[1],
        'tag1'
      )
    } else {
      return res.sendStatus(400)
    }
  }

  res.sendStatus(200)
  res.end()
})

app.post('/engraveSlot2', (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList
  console.log(line1, line2, numberOfLines)

  if (numberOfLines == '1lines') {
    let a = doesTextFits.line1(line1, 'tag2')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(line1, line2, ncFileName, numberOfLines, a, NaN, 'tag2')
    } else {
      return res.sendStatus(400)
    }
  }

  if (numberOfLines == '2lines') {
    let a = doesTextFits.line2(line1, line2, 'tag2')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(
        line1,
        line2,
        ncFileName,
        numberOfLines,
        a[0],
        a[1],
        'tag2'
      )
    } else {
      return res.sendStatus(400)
    }
  }

  res.sendStatus(200)
  res.end()
})

app.post('/engraveSlot3', (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList
  console.log(line1, line2, numberOfLines)

  if (numberOfLines == '1lines') {
    let a = doesTextFits.line1(line1, 'tag3')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(line1, line2, ncFileName, numberOfLines, a, NaN, 'tag3')
    } else {
      return res.sendStatus(400)
    }
  }

  if (numberOfLines == '2lines') {
    let a = doesTextFits.line2(line1, line2, 'tag3')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(
        line1,
        line2,
        ncFileName,
        numberOfLines,
        a[0],
        a[1],
        'tag3'
      )
    } else {
      return res.sendStatus(400)
    }
  }

  res.sendStatus(200)
  res.end()
})

app.post('/engraveSlot4', (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList
  console.log(line1, line2, numberOfLines)

  if (numberOfLines == '1lines') {
    let a = doesTextFits.line1(line1, 'tag4')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(line1, line2, ncFileName, numberOfLines, a, NaN, 'tag4')
    } else {
      return res.sendStatus(400)
    }
  }

  if (numberOfLines == '2lines') {
    let a = doesTextFits.line2(line1, line2, 'tag4')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(
        line1,
        line2,
        ncFileName,
        numberOfLines,
        a[0],
        a[1],
        'tag4'
      )
    } else {
      return res.sendStatus(400)
    }
  }

  res.sendStatus(200)
  res.end()
})

app.post('/engraveSlot5', (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList
  console.log(line1, line2, numberOfLines)

  if (numberOfLines == '1lines') {
    let a = doesTextFits.line1(line1, 'tag5')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(line1, line2, ncFileName, numberOfLines, a, NaN, 'tag5')
    } else {
      return res.sendStatus(400)
    }
  }

  if (numberOfLines == '2lines') {
    let a = doesTextFits.line2(line1, line2, 'tag5')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(
        line1,
        line2,
        ncFileName,
        numberOfLines,
        a[0],
        a[1],
        'tag5'
      )
    } else {
      return res.sendStatus(400)
    }
  }

  res.sendStatus(200)
  res.end()
})

app.post('/engraveSlot6', (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList
  console.log(line1, line2, numberOfLines)

  if (numberOfLines == '1lines') {
    let a = doesTextFits.line1(line1, 'tag6')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(line1, line2, ncFileName, numberOfLines, a, NaN, 'tag6')
    } else {
      return res.sendStatus(400)
    }
  }

  if (numberOfLines == '2lines') {
    let a = doesTextFits.line2(line1, line2, 'tag6')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(
        line1,
        line2,
        ncFileName,
        numberOfLines,
        a[0],
        a[1],
        'tag6'
      )
    } else {
      return res.sendStatus(400)
    }
  }

  res.sendStatus(200)
  res.end()
})

app.post('/engraveSlot7', (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList
  console.log(line1, line2, numberOfLines)

  if (numberOfLines == '1lines') {
    let a = doesTextFits.line1(line1, 'tag7')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(line1, line2, ncFileName, numberOfLines, a, NaN, 'tag7')
    } else {
      return res.sendStatus(400)
    }
  }

  if (numberOfLines == '2lines') {
    let a = doesTextFits.line2(line1, line2, 'tag7')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(
        line1,
        line2,
        ncFileName,
        numberOfLines,
        a[0],
        a[1],
        'tag7'
      )
    } else {
      return res.sendStatus(400)
    }
  }

  res.sendStatus(200)
  res.end()
})

app.post('/engraveSlot8', (req, res) => {
  const line1 = req.body.line1
  const line2 = req.body.line2
  const numberOfLines = req.body.lineList
  console.log(line1, line2, numberOfLines)

  if (numberOfLines == '1lines') {
    let a = doesTextFits.line1(line1, 'tag8')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(line1, line2, ncFileName, numberOfLines, a, NaN, 'tag8')
    } else {
      return res.sendStatus(400)
    }
  }

  if (numberOfLines == '2lines') {
    let a = doesTextFits.line2(line1, line2, 'tag8')

    if (a) {
      global.ncFileName = uuidv1()
      gCodeGen.generate(
        line1,
        line2,
        ncFileName,
        numberOfLines,
        a[0],
        a[1],
        'tag8'
      )
    } else {
      return res.sendStatus(400)
    }
  }

  res.sendStatus(200)
  res.end()
})

app.post('/sendGCode', (req, res) => {
  sendGCode.sendGCode(ncFileName)
  res.end()
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
