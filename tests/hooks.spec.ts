//pre and post condition will perform
/*4 types -beforAll,
afterAll
beforeEach 
afterEach 
*/
import{test,expect} from '@playwright/test'
let page;
test.beforeEach(async ({browser})=>{
    page=await browser.newPage() //-will focus only one page
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
} ) 
test.afterEach(async ()=>{
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await page.close();
})
test('login and checkout testcase:',async()=>{
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('#checkout').click();    
})
test('remove item from cart estcase:',async()=>{    
   await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('#remove-sauce-labs-backpack').click();   
})