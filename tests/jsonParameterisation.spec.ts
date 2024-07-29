import { test } from '@playwright/test'
import * as TestData from './TestData/LogintestData.json'

    test('login with validcredentials', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.locator("//input[@name='username']").fill(TestData.validuserName);
        await page.locator("//input[@name='password']").fill(TestData.validpassword);
        await page.getByRole('button', { name: 'Login' }).click();
        //  await page.locator("(//img[@alt='profile picture'])[1]").click();
        //  await page.locator("//a[contains(text(),'Logout')]").click();
        await page.close()
    })
