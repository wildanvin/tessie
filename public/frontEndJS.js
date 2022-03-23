//I separeted the JS in different functions. Each functions controls each modal.

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

  //Make the POST request using fetch
  generateButtonM1.onclick = () => {
    engraveButtonM1.disabled = false

    fetch("/engraveSlot1", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify({
        line1: line1M1.value,
        line2: line2M1.value,
        lineList: selectLinesM1.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Text is good")
          alert(`Se ha generado el texto: 
                ${line1M1.value}
                ${line2M1.value}`)
        } else {
          console.log("Text is too long")
          alert(`El texto es muy largo. Intente con un texto mas corto`)
        }
      })
      .catch((error) => console.log("Error"))
  }

  //when the engrave button is pressed alert ans close the modal
  engraveButtonM1.onclick = () => {
    alert(`Se va a grabar el texto: 
            ${line1M1.value}
            ${line2M1.value}`)

    modal1.style.display = "none"
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM1.addEventListener("change", (e) => {
    line2M1.value = ""
    line1M1.value = ""
    generateButtonM1.disabled = true
    engraveButtonM1.disabled = true
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
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
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
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
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

  //Make the POST request using fetch
  generateButtonM2.onclick = () => {
    engraveButtonM2.disabled = false

    fetch("/engraveSlot2", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify({
        line1: line1M2.value,
        line2: line2M2.value,
        lineList: selectLinesM2.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Text is good")
          alert(`Se ha generado el texto: 
                ${line1M2.value}
                ${line2M2.value}`)
        } else {
          console.log("Text is too long")
          alert(`El texto es muy largo. Intente con un texto mas corto`)
        }
      })
      .catch((error) => console.log("Error"))
  }

  //when the engrave button is pressed alert ans close the modal
  engraveButtonM2.onclick = () => {
    alert(`Se va a grabar el texto: 
          ${line1M2.value}
          ${line2M2.value}`)

    modal2.style.display = "none"
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM2.addEventListener("change", (e) => {
    line2M2.value = ""
    line1M2.value = ""
    generateButtonM2.disabled = true
    engraveButtonM2.disabled = true
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
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
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
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
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

  //Make the POST request using fetch
  generateButtonM3.onclick = () => {
    engraveButtonM3.disabled = false

    fetch("/engraveSlot3", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify({
        line1: line1M3.value,
        line2: line2M3.value,
        lineList: selectLinesM3.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Text is good")
          alert(`Se ha generado el texto: 
                ${line1M3.value}
                ${line2M3.value}`)
        } else {
          console.log("Text is too long")
          alert(`El texto es muy largo. Intente con un texto mas corto`)
        }
      })
      .catch((error) => console.log("Error"))
  }

  //when the engrave button is pressed alert ans close the modal
  engraveButtonM3.onclick = () => {
    alert(`Se va a grabar el texto: 
          ${line1M3.value}
          ${line2M3.value}`)

    modal3.style.display = "none"
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM3.addEventListener("change", (e) => {
    line2M3.value = ""
    line1M3.value = ""
    generateButtonM3.disabled = true
    engraveButtonM3.disabled = true
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
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
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
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
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

  //Make the POST request using fetch
  generateButtonM4.onclick = () => {
    engraveButtonM4.disabled = false

    fetch("/engraveSlot4", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify({
        line1: line1M4.value,
        line2: line2M4.value,
        lineList: selectLinesM4.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Text is good")
          alert(`Se ha generado el texto: 
                ${line1M4.value}
                ${line2M4.value}`)
        } else {
          console.log("Text is too long")
          alert(`El texto es muy largo. Intente con un texto mas corto`)
        }
      })
      .catch((error) => console.log("Error"))
  }

  //when the engrave button is pressed alert ans close the modal
  engraveButtonM4.onclick = () => {
    alert(`Se va a grabar el texto: 
          ${line1M4.value}
          ${line2M4.value}`)

    modal4.style.display = "none"
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM4.addEventListener("change", (e) => {
    line2M4.value = ""
    line1M4.value = ""
    generateButtonM4.disabled = true
    engraveButtonM4.disabled = true
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
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
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
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
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

  //Make the POST request using fetch
  generateButtonM5.onclick = () => {
    engraveButtonM5.disabled = false

    fetch("/engraveSlot5", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify({
        line1: line1M5.value,
        line2: line2M5.value,
        lineList: selectLinesM5.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Text is good")
          alert(`Se ha generado el texto: 
                ${line1M5.value}
                ${line2M5.value}`)
        } else {
          console.log("Text is too long")
          alert(`El texto es muy largo. Intente con un texto mas corto`)
        }
      })
      .catch((error) => console.log("Error"))
  }

  //when the engrave button is pressed alert ans close the modal
  engraveButtonM5.onclick = () => {
    alert(`Se va a grabar el texto: 
          ${line1M5.value}
          ${line2M5.value}`)

    modal5.style.display = "none"
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM5.addEventListener("change", (e) => {
    line2M5.value = ""
    line1M5.value = ""
    generateButtonM5.disabled = true
    engraveButtonM5.disabled = true
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
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
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
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
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

  //Select generate button in modal 6
  var generateButtonM6 = document.getElementById("generateButtonM6")
  var engraveButtonM6 = document.getElementById("engraveButtonM6")

  //Select the options of "1 lines" or 2 "lines"
  var selectLinesM6 = document.getElementById("linesM6")

  //Make the POST request using fetch
  generateButtonM6.onclick = () => {
    engraveButtonM6.disabled = false

    fetch("/engraveSlot6", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify({
        line1: line1M6.value,
        line2: line2M6.value,
        lineList: selectLinesM6.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Text is good")
          alert(`Se ha generado el texto: 
                ${line1M6.value}
                ${line2M6.value}`)
        } else {
          console.log("Text is too long")
          alert(`El texto es muy largo. Intente con un texto mas corto`)
        }
      })
      .catch((error) => console.log("Error"))
  }

  //when the engrave button is pressed alert ans close the modal
  engraveButtonM6.onclick = () => {
    alert(`Se va a grabar el texto: 
          ${line1M6.value}
          ${line2M6.value}`)

    modal6.style.display = "none"
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM6.addEventListener("change", (e) => {
    line2M6.value = ""
    line1M6.value = ""
    generateButtonM6.disabled = true
    engraveButtonM6.disabled = true
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
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
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
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
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

/*The Modal 7*/
;(() => {
  // Get the modal
  var modal7 = document.getElementById("modal7")

  // Get the button that opens the modal
  var btnM7 = document.getElementById("box-7")

  // Get the <span> element that closes the modal
  var spanM7 = document.getElementsByClassName("close")[6]

  //Select input lines
  var line2M7 = document.getElementById("line2M7")
  var line1M7 = document.getElementById("line1M7")

  //Select generate button in modal 7
  var generateButtonM7 = document.getElementById("generateButtonM7")
  var engraveButtonM7 = document.getElementById("engraveButtonM7")

  //Select the options of "1 lines" or 2 "lines"
  var selectLinesM7 = document.getElementById("linesM7")

  //Make the POST request using fetch
  generateButtonM7.onclick = () => {
    engraveButtonM7.disabled = false

    fetch("/engraveSlot7", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify({
        line1: line1M7.value,
        line2: line2M7.value,
        lineList: selectLinesM7.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Text is good")
          alert(`Se ha generado el texto: 
                ${line1M7.value}
                ${line2M7.value}`)
        } else {
          console.log("Text is too long")
          alert(`El texto es muy largo. Intente con un texto mas corto`)
        }
      })
      .catch((error) => console.log("Error"))
  }

  //when the engrave button is pressed alert ans close the modal
  engraveButtonM7.onclick = () => {
    alert(`Se va a grabar el texto: 
          ${line1M7.value}
          ${line2M7.value}`)

    modal7.style.display = "none"
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM7.addEventListener("change", (e) => {
    line2M7.value = ""
    line1M7.value = ""
    generateButtonM7.disabled = true
    engraveButtonM7.disabled = true
  })

  // When the user clicks on <span> (x), close the modal
  spanM7.onclick = function () {
    modal7.style.display = "none"
  }

  // When the user clicks anywhere outside of the modal, close it

  window.addEventListener("click", function (event) {
    if (event.target == modal7) {
      modal7.style.display = "none"
    }
  })

  // When the user clicks on the tag button:
  // open the modal
  // clean the input lines
  // disable generateButton
  // and show only one line to engrave
  btnM7.onclick = function () {
    modal7.style.display = "block"
    line2M7.value = ""
    line1M7.value = ""
    generateButtonM7.disabled = true
    engraveButtonM7.disabled = true
    selectLinesM7.value = "1lines"
    line2M7.style.display = "none"
  }

  // Display the number of lines to engrave

  line2M7.style.display = "none"
  var linesM7 = document.getElementById("linesM7")
  linesM7.addEventListener("change", function () {
    if (this.value == "2lines") {
      line2M7.style.display = "block"
    } else if (this.value == "1lines") {
      line2M7.style.display = "none"
    }
  })

  //Validate the input fromm the front end. You can only engrave numbers and
  //uppercase letters

  var a,
    b = false

  line1M7.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
      a = true
      if ((a && b) || line2M7.style.display == "none") {
        generateButtonM7.disabled = false
      }
    } else {
      a = false
      generateButtonM7.disabled = true
    }
  })

  line2M7.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
      b = true
      if (a && b) {
        generateButtonM7.disabled = false
      }
    } else {
      b = false
      generateButtonM7.disabled = true
    }
  })
})()

/*The Modal 8*/
;(() => {
  // Get the modal
  var modal8 = document.getElementById("modal8")

  // Get the button that opens the modal
  var btnM8 = document.getElementById("box-8")

  // Get the <span> element that closes the modal
  var spanM8 = document.getElementsByClassName("close")[7]

  //Select input lines
  var line2M8 = document.getElementById("line2M8")
  var line1M8 = document.getElementById("line1M8")

  //Select generate button in modal 8
  var generateButtonM8 = document.getElementById("generateButtonM8")
  var engraveButtonM8 = document.getElementById("engraveButtonM8")

  //Select the options of "1 lines" or 2 "lines"
  var selectLinesM8 = document.getElementById("linesM8")

  //Make the POST request using fetch
  generateButtonM8.onclick = () => {
    engraveButtonM8.disabled = false

    fetch("/engraveSlot8", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify({
        line1: line1M8.value,
        line2: line2M8.value,
        lineList: selectLinesM8.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Text is good")
          alert(`Se ha generado el texto: 
                ${line1M8.value}
                ${line2M8.value}`)
        } else {
          console.log("Text is too long")
          alert(`El texto es muy largo. Intente con un texto mas corto`)
        }
      })
      .catch((error) => console.log("Error"))
  }

  //when the engrave button is pressed alert ans close the modal
  engraveButtonM8.onclick = () => {
    alert(`Se va a grabar el texto: 
          ${line1M8.value}
          ${line2M8.value}`)

    modal8.style.display = "none"
  }

  //Every time we change the number of lines to engrave we delete the input values and disable the button
  selectLinesM8.addEventListener("change", (e) => {
    line2M8.value = ""
    line1M8.value = ""
    generateButtonM8.disabled = true
    engraveButtonM8.disabled = true
  })
  // When the user clicks on <span> (x), close the modal
  spanM8.onclick = function () {
    modal8.style.display = "none"
  }

  // When the user clicks anywhere outside of the modal, close it

  window.addEventListener("click", function (event) {
    if (event.target == modal8) {
      modal8.style.display = "none"
    }
  })

  // When the user clicks on the tag button:
  // open the modal
  // clean the input lines
  // disable generateButton
  // and show only one line to engrave
  btnM8.onclick = function () {
    modal8.style.display = "block"
    line2M8.value = ""
    line1M8.value = ""
    generateButtonM8.disabled = true
    engraveButtonM8.disabled = true
    selectLinesM8.value = "1lines"
    line2M8.style.display = "none"
  }

  // Display the number of lines to engrave

  line2M8.style.display = "none"
  var linesM8 = document.getElementById("linesM8")
  linesM8.addEventListener("change", function () {
    if (this.value == "2lines") {
      line2M8.style.display = "block"
    } else if (this.value == "1lines") {
      line2M8.style.display = "none"
    }
  })

  //Validate the input fromm the front end. You can only engrave numbers and
  //uppercase letters

  var a,
    b = false

  line1M8.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
      a = true
      if ((a && b) || line2M8.style.display == "none") {
        generateButtonM8.disabled = false
      }
    } else {
      a = false
      generateButtonM8.disabled = true
    }
  })

  line2M8.addEventListener("input", (e) => {
    if (e.target.value.match(/^[A-Z0-9ÁÉÍÓÚÑ]+$/g)) {
      b = true
      if (a && b) {
        generateButtonM8.disabled = false
      }
    } else {
      b = false
      generateButtonM8.disabled = true
    }
  })
})()
