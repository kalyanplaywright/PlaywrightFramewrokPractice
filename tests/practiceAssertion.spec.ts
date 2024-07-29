import{test,expect} from "@playwright/test";

test('Assertion Tests',async({page})=>{
await page.goto("https://www.letskodeit.com/practice");
//its presenet the textbox 
await expect(page.locator("//input[@id='displayed-text']")).toBeVisible();
await page.locator("//input[@id='hide-textbox']").click();
await expect(page.locator("//input[@id='displayed-text']")).toBeHidden();
await page.locator("//input[@id='show-textbox']").click();
await expect( page.locator("//input[@id='displayed-text']")).toBeVisible();
await page.close();
});
  


