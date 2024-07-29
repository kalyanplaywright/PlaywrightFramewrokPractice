import {test} from "@playwright/test"

//test.describe('login logout ')

test('login application test',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

await page.locator ("//input[@name='username']").fill('Admin');
await page.locator("//input[@name='password']").fill('admin123');
//await page.locator("//button[@type='submit']").click();
 //methods provided by playwright
await page.getByRole('button', { name: 'Login' }).click();
 await page.locator("(//img[@alt='profile picture'])[1]").click();
 await page.locator("//a[contains(text(),'Logout')]").click();
 //locator syntax in playwright
 //by ID 
 //page.locator('#show-textbox') 
 // by tagName
 //page.locator('input')
//by classValue
//by attribute
//by full classValue
//by xpath
//by combination of differenct selector
//by partial text
//by exact text
 //await page.pause();

})