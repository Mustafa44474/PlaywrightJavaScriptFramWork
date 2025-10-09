
import { test, expect} from "@playwright/test"

test("Wait in Playwright", async({page})=>{

/*
    // Wait is used for Service base Applicaiotn 
await page.waitForLoadState('networkidle')
waitForLoadState(state, options)
waitForNavigation(options): 

*/
/* Waits for the page navigation to complete.
 You can specify options such as timeout and waitUntil (load, domcontentloaded, networkidle).

// For Non Servie base Applicaiton and element 

await page.locator("text = tes").waitFor()

// There is auto wait macanism for following eleemnt Play wright will wait until email is attached visible-Stabel
// Recive events, - enabale - Editabel

/*

check
click
dbclick
setChecked
tap
uncheck
hover
scrollView
Screenshoot
fill
Select text
focus
getAttribute
innerText
innerHTML
press
setInputFiles
selectOption
textConten
type
*/



})




