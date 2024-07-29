import{test, expect} from '@playwright/test'
test('alert handling:',async({page})=>{
   await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
  //  await page.locator("button[onclick='jsAlert()']").click()
   // expect (await page.locator("//p[@id='result']")).toHaveText('You successfully clicked an alert')
    page.on("dialog",async(alert) =>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Alert');
        await alert.accept();
        //await alert.accept("hello");
        expect (await page.locator("//p[@id='result']")).toHaveText('You successfully clicked an alert')        
    }) 
    await page.locator("button[onclick='jsAlert()']").click()
    await page.waitForTimeout(3000)
    await page.close()
})
