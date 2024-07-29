import{test, expect} from '@playwright/test'
test('checkbox verification:',async({page})=>{
   await page.goto("https://demo.automationtesting.in/");
   page.locator("//button[@id='btn2']").click();
   
   //await page.locator("//input[@type='radio' and @value='Male']").click(); 
  //await expect(page.locator("//input[@type='radio' and @value='Male']").isChecked()).toBeFalsy();
  //t and f then false
  expect(await page.locator("//input[@type='radio' and @value='Male']").isChecked()).toBeFalsy();
  expect(await page.locator("//input[@type='radio' and @value='Male']")).not.toBeChecked();

   //expect await page.locator("//input[@type='radio' and @value='Male']").isChecked();
   //expect(await page.locator("//input[@type='radio' and @value='FeMale']").isChecked()).toBeFalsy();
   //here is cheked will be true and falsy is flase (T and F then false)
   //expect(await page.locator("//input[@type='radio' and @value='FeMale']").isChecked()).toBeTruthy();

   //input[@type='radio' and @value='FeMale']
   await page.close();
})