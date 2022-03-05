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

  // When the user clicks on the button, open the modal
  btnM3.onclick = function () {
    modal3.style.display = "block"
  }

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
})()

/*The Modal 4*/
;(() => {
  // Get the modal
  var modal4 = document.getElementById("modal4")

  // Get the button that opens the modal
  var btnM4 = document.getElementById("box-4")

  // Get the <span> element that closes the modal
  var spanM4 = document.getElementsByClassName("close")[3]

  // When the user clicks on the button, open the modal
  btnM4.onclick = function () {
    modal4.style.display = "block"
  }

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
})()
