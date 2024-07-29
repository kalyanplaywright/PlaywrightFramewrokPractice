import{test,expect} from '@playwright/test'

test('tab handling-Open New Tabbed Windows: ',async({page})=>{

    await page.goto('https://demo.automationtesting.in/Windows.html')

    //const clickbutton= await page.locator("//button[text()= '    click   ']").click()
    const [newtab]= await Promise.all([
        page.waitForEvent('popup'),
        await page.click("//button[text()= '    click   ']")
    ])
    await newtab.waitForLoadState()
    newtab.locator('[class="h3 mb-3 selenium-webdriver"]').click()
    await newtab.waitForTimeout(6000)
await newtab.close()
await page.waitForTimeout(5000)
})

test('Tab handling -Open New Seperate Windows:',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Windows.html')
    await expect(page.locator("//a[normalize-space()='Open New Seperate Windows']")).toHaveText("Open New Seperate Windows");
    await page.locator("//a[contains(text(),'Open New Seperate Windows')]").click()
    //const clickbutton= await page.locator("//button[text()= '    click   ']").click()
    const [newtab]= await Promise.all([
        page.waitForEvent('popup'),
        await page.click("//button[@class='btn btn-primary']")
    ])
    await newtab.waitForLoadState()
    newtab.locator('[class="h3 mb-3 selenium-webdriver"]').click()
    await newtab.waitForTimeout(6000)
await newtab.close()
await page.waitForTimeout(5000)
})
test.only('Tab handling -Open Seperate Multiple Windows:',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Windows.html')
   await expect(page.locator("//h1[text()='Automation Demo Site ']")).toHaveText('Automation Demo Site')
   await expect(page.locator("//a[text()='Open Seperate Multiple Windows']")).toHaveText('Open Seperate Multiple Windows');
    await page.locator("//a[text()='Open Seperate Multiple Windows']").click()
     const [multipleTab]= await Promise.all([
        page.waitForEvent('popup'),
        await page.click("//div[@id='Multiple']/button[@class='btn btn-info']")
    ])
    await multipleTab.waitForLoadState()
    const pages=multipleTab.context().pages()
    console.log('total tab or pages got opend :'+pages.length)

    await pages[2].locator('[class="h3 mb-3 selenium-webdriver"]').click()
    await multipleTab.waitForTimeout(5000)
  await pages[1].locator("//img[@id='enterimg']").click()
  await pages[1].locator("//input[@placeholder='First Name']").fill('kalyan')  
    await multipleTab.waitForTimeout(6000)
 await pages[2].close()
await pages[1].close()
})