import {test,expect} from '@playwright/test'
test('Login Logout', async ({page})=> {
    await page.goto ("https://demo.automationtesting.in/")    
    await page.locator ("//button [@id='btn2']").click();   
      
      //expect (await page.locator("(//input [@type='radio'])[1]").isChecked()).toBeFalsy();
   //await page.locator("(//input [@type='radio'])[2]").check()
   const femaleradiobutton=page.locator("(//input [@type='radio'])[2]") //const  is type of variable , inside the { } we can use let or const
   await femaleradiobutton.check()
   //expect (await page.locator("(//input [@type='radio'])[2]").isChecked()).toBeFalsy()
   //expect (await page.locator("(//input [@type='radio'])[2]").isChecked()).toBeTruthy()
   //expect (await page.locator("(//input [@type='radio'])[2]")).not.toBeChecked() 
   //if we are using not, that time we can not use the no.tobechecked with tobetruty()
   //await expect (page.locator("(//input [@type='radio'])[2]")).toBeChecked() 
   //await expect (page.locator("(//input [@type='radio'])[2]").isChecked()).toBeTruthy()
  // expect (await page.locator("(//input [@type='radio'])[2]")).not.toBeChecked();
   // await page.locator("//span[@class='oxd-userdropdown-tab']").click
    //await page.locator ("//a [text()='Logout']").click
await page.close();
})
//page.locator('input[value="Male"]')
//page.locator('input[value="FeMale"]'
// console.log(await expect ( page.locator("(//input [@type='radio'])[1]").isChecked()).toBeFalsy());

test.only('practice radiobutton for male', async ({page})=> {
  await page.goto ("https://demo.automationtesting.in/")    
  await page.locator ("//button [@id='btn2']").click(); 
  await page.locator("(//input [@type='radio'])[2]").click()
    expect (await page.locator("(//input [@type='radio'])[2]").isChecked()).toBeTruthy();
 //await page.locator("(//input [@type='radio'])[2]").check()
 await page.pause()
 await page.close()

})