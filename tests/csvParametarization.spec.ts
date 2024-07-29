import { test } from '@playwright/test'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

const loginTestdata =parse(fs.readFileSync(path.join(__dirname,'TestData','loginTestData.csv')),{
    columns:true,
    skip_empty_lines:true
})
    test('login with validcredentials', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.locator("//input[@name='username']").fill(loginTestdata[0].validuserName);
        await page.locator("//input[@name='password']").fill(loginTestdata[0].validpassword);
        await page.getByRole('button', { name: 'Login' }).click();
        //  await page.locator("(//img[@alt='profile picture'])[1]").click();
        //  await page.locator("//a[contains(text(),'Logout')]").click();
        await page.close()
    })