import {test} from "@playwright/test"
test('login application test',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

await page.locator ("//input[@name='username']").fill('Admin');
await page.locator("//input[@name='password']").pressSequentially('admin123',{delay:500});//sequence order to type
await page.locator("//input[@name='password']").press('Enter');
//await page.locator("//button[@type='submit']").click();
 //methods provided by playwright
//await page.getByRole('button', { name: 'Login' }).click();
})