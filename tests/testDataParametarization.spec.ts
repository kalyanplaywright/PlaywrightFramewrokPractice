import { test } from "@playwright/test"
const credentils = [
    {
        "userName": "Admin",
        "password": "admin123"
    },
    {
        "userName": "Admin2",
        "password": "admin123"
    },
    {
        "userName": "Admin3",
        "password": "admin123"
    }

]
credentils.forEach(data => {
    test(`login with credentials ${data.userName} + ${data.password}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.locator("//input[@name='username']").fill(data.userName);
        await page.locator("//input[@name='password']").fill(data.password);
        await page.getByRole('button', { name: 'Login' }).click();
        //  await page.locator("(//img[@alt='profile picture'])[1]").click();
        //  await page.locator("//a[contains(text(),'Logout')]").click();
        await page.close()
    })
})