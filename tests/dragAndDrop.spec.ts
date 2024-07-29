import{test,expect} from '@playwright/test'

test('Drag and Drop testcase:',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
 const  washington=page.locator("//div[@id='box3'] [text()='Washington']")
const  uSA=page.locator("//div[@id='box103'] [text()='United States']")
await washington.hover()
await page.mouse.down()
await uSA.hover()
await page.mouse.up()
await page.waitForTimeout(3000)
})

test.only('Drag and Drop testcase 2:',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
 const  washington=page.locator("//div[@id='box3'] [text()='Washington']")
const  uSA=page.locator("//div[@id='box103'] [text()='United States']")
await washington.dragTo(uSA)
await page.waitForTimeout(3000)
})