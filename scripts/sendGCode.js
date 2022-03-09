function sendGCode(ncFileName) {
  const puppeteer = require("puppeteer")
  ;(async () => {
    // set some options (set headless to false so we can see
    // this automated browsing experience)

    //with the executable path option works on the raspberry pi
    /* let launchOptions = { executablePath: '/usr/bin/chromium-browser', 
                headless: false, args: ['--start-maximized'] }; */

    let launchOptions = { headless: false, args: ["--start-maximized"] }

    const browser = await puppeteer.launch(launchOptions)
    //const browser = await puppeteer.launch({
    //executablePath: '/usr/bin/chromium-browser'
    //});

    const page = await browser.newPage()

    // set viewport and user agent (just in case for nice viewing)
    await page.setViewport({ width: 1366, height: 768 })
    await page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    )

    // go to the target web
    await page.goto("http://192.168.88.254:8080/")

    //go to "Send file"
    await page.waitFor(500)
    await page.click(".nav a:nth-child(4)")

    const [fileChooser] = await Promise.all([
      page.waitForFileChooser(),
      page.click("[accept]"),
      // click the button with the "accept" attribute
    ])

    //Select the file
    await fileChooser.accept([`./ncFiles/${ncFileName}.nc`])

    await page.waitFor(1000) //1000 seconds are necessary or it doesnt work v:
    await page.click(".btn-secondary")
    await browser.close()
  })()

  console.log(ncFileName)
}

exports.sendGCode = sendGCode
