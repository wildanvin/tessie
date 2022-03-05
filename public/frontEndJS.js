//I separeted the JS in different functions. Each functions controls each modal.
//I don't know if this is the ideal way to do it but it works :)

/* Modal 1*/
;(() => {
  // Get the modal
  var modal1 = document.getElementById("modal1")

  // Get the button that opens the modal
  var btnM1 = document.getElementById("box-1")

  // Get the <span> element that closes the modal
  var spanM1 = document.getElementsByClassName("close")[0]

  //Select input lines
  var line2M1 = document.getElementById("line2M1")
  var line1M1 = document.getElementById("line1M1")

  //Select generate button in modal 1
  var generateButtonM1 = document.getElementById("generateButtonM1")
  var engraveButtonM1 = document.getElementById("engraveButtonM1")

  //Select the options of "1 lines" or 2 "lines"
  var selectLinesM1 = document.getElementById("linesM1")

  generateButtonM1.onclick = () => {
    alert(`Se ha generado el texto: 
    ${line1M1.value}
    ${line2M1.value}`)
    engraveButtonM1.disabled = false
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM1.addEventListener("change", (e) => {
    line2M1.value = ""
    line1M1.value = ""
    generateButtonM1.disabled = true
  })

  // When the user clicks on <span> (x), close the modal
  spanM1.onclick = function () {
    modal1.style.display = "none"
  }

  // When the user clicks anywhere outside of the modal, close it

  window.addEventListener("click", function (event) {
    if (event.target == modal1) {
      modal1.style.display = "none"
    }
  })

  // When the user clicks on the tag button:
  // open the modal
  // clean the input lines
  // disable generateButton
  // and show only one line to engrave
  btnM1.onclick = function () {
    modal1.style.display = "block"
    line2M1.value = ""
    line1M1.value = ""
    generateButtonM1.disabled = true
    engraveButtonM1.disabled = true
    selectLinesM1.value = "1lines"
    line2M1.style.display = "none"
  }

  // Display the number of lines to engrave

  line2M1.style.display = "none"
  var linesM1 = document.getElementById("linesM1")
  linesM1.addEventListener("change", function () {
    if (this.value == "2lines") {
      line2M1.style.display = "block"
    } else if (this.value == "1lines") {
      line2M1.style.display = "none"
    }
  })

  //Validate the input fromm the front end. You can only engrave numbers and
  //uppercase letters

  var a,
    b = false

  line1M1.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9]+$/g)) {
      a = true
      if ((a && b) || line2M1.style.display == "none") {
        generateButtonM1.disabled = false
      }
    } else {
      a = false
      generateButtonM1.disabled = true
    }
  })

  line2M1.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9]+$/g)) {
      b = true
      if (a && b) {
        generateButtonM1.disabled = false
      }
    } else {
      b = false
      generateButtonM1.disabled = true
    }
  })
})()

/* Modal 2*/
;(() => {
  // Get the modal
  var modal2 = document.getElementById("modal2")

  // Get the button that opens the modal
  var btnM2 = document.getElementById("box-2")

  // Get the <span> element that closes the modal
  var spanM2 = document.getElementsByClassName("close")[1]

  //Select input lines
  var line2M2 = document.getElementById("line2M2")
  var line1M2 = document.getElementById("line1M2")

  //Select generate button in modal 2
  var generateButtonM2 = document.getElementById("generateButtonM2")
  var engraveButtonM2 = document.getElementById("engraveButtonM2")

  //Select the options of "1 lines" or 2 "lines"
  var selectLinesM2 = document.getElementById("linesM2")

  generateButtonM2.onclick = () => {
    alert(`Se ha generado el texto: 
    ${line1M2.value}
    ${line2M2.value}`)
    engraveButtonM2.disabled = false
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM2.addEventListener("change", (e) => {
    line2M2.value = ""
    line1M2.value = ""
    generateButtonM2.disabled = true
  })

  // When the user clicks on <span> (x), close the modal
  spanM2.onclick = function () {
    modal2.style.display = "none"
  }

  // When the user clicks anywhere outside of the modal, close it

  window.addEventListener("click", function (event) {
    if (event.target == modal2) {
      modal2.style.display = "none"
    }
  })

  // When the user clicks on the tag button:
  // open the modal
  // clean the input lines
  // disable generateButton
  // and show only one line to engrave
  btnM2.onclick = function () {
    modal2.style.display = "block"
    line2M2.value = ""
    line1M2.value = ""
    generateButtonM2.disabled = true
    engraveButtonM2.disabled = true
    selectLinesM2.value = "1lines"
    line2M2.style.display = "none"
  }

  // Display the number of lines to engrave

  line2M2.style.display = "none"
  var linesM2 = document.getElementById("linesM2")
  linesM2.addEventListener("change", function () {
    if (this.value == "2lines") {
      line2M2.style.display = "block"
    } else if (this.value == "1lines") {
      line2M2.style.display = "none"
    }
  })

  //Validate the input fromm the front end. You can only engrave numbers and
  //uppercase letters

  var a,
    b = false

  line1M2.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9]+$/g)) {
      a = true
      if ((a && b) || line2M2.style.display == "none") {
        generateButtonM2.disabled = false
      }
    } else {
      a = false
      generateButtonM2.disabled = true
    }
  })

  line2M2.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9]+$/g)) {
      b = true
      if (a && b) {
        generateButtonM2.disabled = false
      }
    } else {
      b = false
      generateButtonM2.disabled = true
    }
  })
})()

/*The Modal 3*/
;(() => {
  // Get the modal
  var modal3 = document.getElementById("modal3")

  // Get the button that opens the modal
  var btnM3 = document.getElementById("box-3")

  // Get the <span> element that closes the modal
  var spanM3 = document.getElementsByClassName("close")[2]

  //Select input lines
  var line2M3 = document.getElementById("line2M3")
  var line1M3 = document.getElementById("line1M3")

  //Select generate button in modal 3
  var generateButtonM3 = document.getElementById("generateButtonM3")
  var engraveButtonM3 = document.getElementById("engraveButtonM3")

  //Select the options of "1 lines" or 2 "lines"
  var selectLinesM3 = document.getElementById("linesM3")

  generateButtonM3.onclick = () => {
    alert(`Se ha generado el texto: 
    ${line1M3.value}
    ${line2M3.value}`)
    engraveButtonM3.disabled = false
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM3.addEventListener("change", (e) => {
    line2M3.value = ""
    line1M3.value = ""
    generateButtonM3.disabled = true
  })

  // When the user clicks on <span> (x), close the modal
  spanM3.onclick = function () {
    modal3.style.display = "none"
  }

  // When the user clicks anywhere outside of the modal, close it

  window.addEventListener("click", function (event) {
    if (event.target == modal3) {
      modal3.style.display = "none"
    }
  })

  // When the user clicks on the tag button:
  // open the modal
  // clean the input lines
  // disable generateButton
  // and show only one line to engrave
  btnM3.onclick = function () {
    modal3.style.display = "block"
    line2M3.value = ""
    line1M3.value = ""
    generateButtonM3.disabled = true
    engraveButtonM3.disabled = true
    selectLinesM3.value = "1lines"
    line2M3.style.display = "none"
  }

  // Display the number of lines to engrave

  line2M3.style.display = "none"
  var linesM3 = document.getElementById("linesM3")
  linesM3.addEventListener("change", function () {
    if (this.value == "2lines") {
      line2M3.style.display = "block"
    } else if (this.value == "1lines") {
      line2M3.style.display = "none"
    }
  })

  //Validate the input fromm the front end. You can only engrave numbers and
  //uppercase letters

  var a,
    b = false

  line1M3.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9]+$/g)) {
      a = true
      if ((a && b) || line2M3.style.display == "none") {
        generateButtonM3.disabled = false
      }
    } else {
      a = false
      generateButtonM3.disabled = true
    }
  })

  line2M3.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9]+$/g)) {
      b = true
      if (a && b) {
        generateButtonM3.disabled = false
      }
    } else {
      b = false
      generateButtonM3.disabled = true
    }
  })
})()

/*The Modal 4*/
;(() => {
  // Get the modal
  var modal4 = document.getElementById("modal4")

  // Get the button that opens the modal
  var btnM4 = document.getElementById("box-4")

  // Get the <span> element that closes the modal
  var spanM4 = document.getElementsByClassName("close")[3]

  //Select input lines
  var line2M4 = document.getElementById("line2M4")
  var line1M4 = document.getElementById("line1M4")

  //Select generate button in modal 4
  var generateButtonM4 = document.getElementById("generateButtonM4")
  var engraveButtonM4 = document.getElementById("engraveButtonM4")

  //Select the options of "1 lines" or 2 "lines"
  var selectLinesM4 = document.getElementById("linesM4")

  generateButtonM4.onclick = () => {
    alert(`Se ha generado el texto: 
    ${line1M4.value}
    ${line2M4.value}`)
    engraveButtonM4.disabled = false
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM4.addEventListener("change", (e) => {
    line2M4.value = ""
    line1M4.value = ""
    generateButtonM4.disabled = true
  })

  // When the user clicks on <span> (x), close the modal
  spanM4.onclick = function () {
    modal4.style.display = "none"
  }

  // When the user clicks anywhere outside of the modal, close it

  window.addEventListener("click", function (event) {
    if (event.target == modal4) {
      modal4.style.display = "none"
    }
  })

  // When the user clicks on the tag button:
  // open the modal
  // clean the input lines
  // disable generateButton
  // and show only one line to engrave
  btnM4.onclick = function () {
    modal4.style.display = "block"
    line2M4.value = ""
    line1M4.value = ""
    generateButtonM4.disabled = true
    engraveButtonM4.disabled = true
    selectLinesM4.value = "1lines"
    line2M4.style.display = "none"
  }

  // Display the number of lines to engrave

  line2M4.style.display = "none"
  var linesM4 = document.getElementById("linesM4")
  linesM4.addEventListener("change", function () {
    if (this.value == "2lines") {
      line2M4.style.display = "block"
    } else if (this.value == "1lines") {
      line2M4.style.display = "none"
    }
  })

  //Validate the input fromm the front end. You can only engrave numbers and
  //uppercase letters

  var a,
    b = false

  line1M4.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9]+$/g)) {
      a = true
      if ((a && b) || line2M4.style.display == "none") {
        generateButtonM4.disabled = false
      }
    } else {
      a = false
      generateButtonM4.disabled = true
    }
  })

  line2M4.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9]+$/g)) {
      b = true
      if (a && b) {
        generateButtonM4.disabled = false
      }
    } else {
      b = false
      generateButtonM4.disabled = true
    }
  })
})()

/*The Modal 5*/
;(() => {
  // Get the modal
  var modal5 = document.getElementById("modal5")

  // Get the button that opens the modal
  var btnM5 = document.getElementById("box-5")

  // Get the <span> element that closes the modal
  var spanM5 = document.getElementsByClassName("close")[4]

  //Select input lines
  var line2M5 = document.getElementById("line2M5")
  var line1M5 = document.getElementById("line1M5")

  //Select generate button in modal 5
  var generateButtonM5 = document.getElementById("generateButtonM5")
  var engraveButtonM5 = document.getElementById("engraveButtonM5")

  //Select the options of "1 lines" or 2 "lines"
  var selectLinesM5 = document.getElementById("linesM5")

  generateButtonM5.onclick = () => {
    alert(`Se ha generado el texto: 
    ${line1M5.value}
    ${line2M5.value}`)
    engraveButtonM5.disabled = false
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM5.addEventListener("change", (e) => {
    line2M5.value = ""
    line1M5.value = ""
    generateButtonM5.disabled = true
  })

  // When the user clicks on <span> (x), close the modal
  spanM5.onclick = function () {
    modal5.style.display = "none"
  }

  // When the user clicks anywhere outside of the modal, close it

  window.addEventListener("click", function (event) {
    if (event.target == modal5) {
      modal5.style.display = "none"
    }
  })

  // When the user clicks on the tag button:
  // open the modal
  // clean the input lines
  // disable generateButton
  // and show only one line to engrave
  btnM5.onclick = function () {
    modal5.style.display = "block"
    line2M5.value = ""
    line1M5.value = ""
    generateButtonM5.disabled = true
    engraveButtonM5.disabled = true
    selectLinesM5.value = "1lines"
    line2M5.style.display = "none"
  }

  // Display the number of lines to engrave

  line2M5.style.display = "none"
  var linesM5 = document.getElementById("linesM5")
  linesM5.addEventListener("change", function () {
    if (this.value == "2lines") {
      line2M5.style.display = "block"
    } else if (this.value == "1lines") {
      line2M5.style.display = "none"
    }
  })

  //Validate the input fromm the front end. You can only engrave numbers and
  //uppercase letters

  var a,
    b = false

  line1M5.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9]+$/g)) {
      a = true
      if ((a && b) || line2M5.style.display == "none") {
        generateButtonM5.disabled = false
      }
    } else {
      a = false
      generateButtonM5.disabled = true
    }
  })

  line2M5.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9]+$/g)) {
      b = true
      if (a && b) {
        generateButtonM5.disabled = false
      }
    } else {
      b = false
      generateButtonM5.disabled = true
    }
  })
})()

/*The Modal 6*/
;(() => {
  // Get the modal
  var modal6 = document.getElementById("modal6")

  // Get the button that opens the modal
  var btnM6 = document.getElementById("box-6")

  // Get the <span> element that closes the modal
  var spanM6 = document.getElementsByClassName("close")[5]

  //Select input lines
  var line2M6 = document.getElementById("line2M6")
  var line1M6 = document.getElementById("line1M6")

  //Select generate button in modal 5
  var generateButtonM6 = document.getElementById("generateButtonM6")
  var engraveButtonM6 = document.getElementById("engraveButtonM6")

  //Select the options of "1 lines" or 2 "lines"
  var selectLinesM6 = document.getElementById("linesM6")
  generateButtonM6.onclick = () => {
    alert(`Se ha generado el texto: 
    ${line1M6.value}
    ${line2M6.value}`)
    engraveButtonM6.disabled = false
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM6.addEventListener("change", (e) => {
    line2M6.value = ""
    line1M6.value = ""
    generateButtonM6.disabled = true
  })

  // When the user clicks on <span> (x), close the modal
  spanM6.onclick = function () {
    modal6.style.display = "none"
  }

  // When the user clicks anywhere outside of the modal, close it

  window.addEventListener("click", function (event) {
    if (event.target == modal6) {
      modal6.style.display = "none"
    }
  })

  // When the user clicks on the tag button:
  // open the modal
  // clean the input lines
  // disable generateButton
  // and show only one line to engrave
  btnM6.onclick = function () {
    modal6.style.display = "block"
    line2M6.value = ""
    line1M6.value = ""
    generateButtonM6.disabled = true
    engraveButtonM6.disabled = true
    selectLinesM6.value = "1lines"
    line2M6.style.display = "none"
  }

  // Display the number of lines to engrave

  line2M6.style.display = "none"
  var linesM6 = document.getElementById("linesM6")
  linesM6.addEventListener("change", function () {
    if (this.value == "2lines") {
      line2M6.style.display = "block"
    } else if (this.value == "1lines") {
      line2M6.style.display = "none"
    }
  })

  //Validate the input fromm the front end. You can only engrave numbers and
  //uppercase letters

  var a,
    b = false

  line1M6.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9]+$/g)) {
      a = true
      if ((a && b) || line2M6.style.display == "none") {
        generateButtonM6.disabled = false
      }
    } else {
      a = false
      generateButtonM6.disabled = true
    }
  })

  line2M6.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9]+$/g)) {
      b = true
      if (a && b) {
        generateButtonM6.disabled = false
      }
    } else {
      b = false
      generateButtonM6.disabled = true
    }
  })
})()
