import {test,expect} from '@playwright/test'
import exp from 'constants';
test('To Check Assertion ', async({page})=>{
await page.goto('https://www.letskodeit.com/practice');
await expect(page.locator("//*[@id='displayed-text']")).toBeVisible;//assertion to check if that text box is there
await page.locator("//*[@id='hide-textbox']").click();
await expect(page.locator("//*[@id='displayed-text']")).toBeHidden;
await page.locator("//*[@id='show-textbox']").click();
await expect(page.locator("//*[@id='displayed-text']")).toBeVisible;
await page.close();
})

test('To Check Hidden Vissible', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await expect(page.locator("//button[@class='added-manually']")).not.toHaveCount(1);
    await page.locator("button[onclick='addElement()']").click();
    await expect(page.locator("//button[@class='added-manually']")).toHaveCount(1);
    await page.close();   
})

test('To Check button Enabled or Not', async({page})=>{
    await page.goto("https://letcode.in/buttons");
    await expect(page.locator("#colour")).toBeEditable();
   // await expect(page.locator("//button[@title='Disabled button']")).toBeDisabled();
//soft assertion will not stop your next execution but other execution will halt your execution 
   await expect.soft(page.locator("//button[@title='Disabled button']")).toBeEnabled();
   await page.close();
})

test('To Check the Text: ', async({page})=>{
await page.goto('https://www.letskodeit.com/practice');
await expect(page.locator("//div[@id='checkbox-example-div']/fieldset/legend")).toHaveText("Checkbox Example");
await expect(page.locator("//div[@id='checkbox-example-div']/fieldset/legend")).not.toHaveText("Config Example:");
await page.close();
})

test('to check the attribute validation:',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle('OrangeHRM');
    await expect(page).toHaveURL(/orangehrmlive.com/);
await expect(page.locator ("//input[@name='username']")).toHaveAttribute('placeholder','Username');
//regular expression to check the partial text
//await expect(page.locator ("//input[@name='username']")).toHaveAttribute('class','/oxd-input/');
await expect(page.locator ("//input[@name='username']")).toHaveAttribute('class',/.*oxd-input/);
 await page.close();
})

test.only('to check screenshot validation:',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com')
    // await page.pause();
    await expect(page).toHaveScreenshot();
 await page.close();
})

