import{test, expect} from '@playwright/test'
test('dropdown selection:',async({page})=>{
   await page.goto("https://demo.automationtesting.in/Register.html");  
   await page.selectOption('#Skills',{
    value:'APIs'
   }) 
   await page.pause();
   await page.selectOption('#Skills',{
    label:'Javascript'
   })
   await page.pause();
   await page.selectOption('#Skills',{
    index:4
   })
   await page.pause();
   await page.close();
})

test('multi dropdown selection:',async({page})=>{
   await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo"); 

   await page.selectOption("//select[@id='multi-select']",[ 
    {value:'Florida'},
    {label:'New Jersey'},
   { index:5}
])
  await page.close();
})

test('SelectCountry Dropdown for autoSuggestion:',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html"); 
 
    await page.locator("//span[@role='combobox']").click();
   // await page.locator("//input[@role='textbox']").fill('Australia')
    //await page.locator("li[role='treeitem']").click()  
   // await expect(page.locator("//span[@id='select2-country-container']")).toHaveText("Australia")
   await page.locator("//span[@id='select2-country-container']").locator("li",{
    hasText:'India'
   })
    await page.waitForTimeout(5000) 
    await page.close();

 })
 test('checkbox testcase:',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html")
    //Movies/cricket is
    await page.locator("//input[@value='Movies' and @type='checkbox']").check();
    await page.locator("//input[@value='Cricket' and @type='checkbox']").check();
    await page.locator("//input[@value='Hockey' and @type='checkbox']").uncheck();
    expect(await page.locator("//input[@value='Movies' and @type='checkbox']").isChecked()).toBeTruthy()
    expect(await page.locator("//input[@value='Cricket' and @type='checkbox']").isChecked()).toBeTruthy()
  //this line will fail as we checked and passing as falsy
    expect(await page.locator("//input[@value='Cricket' and @type='checkbox']").isChecked()).toBeFalsy()
    expect(await page.locator("//input[@value='Hockey' and @type='checkbox']").isChecked()).not.toBeTruthy()
   await page.close();
   })
  
   test.only('get the tab Name Testcase:',async({page})=>{
    await page.goto("https://www.globalsqa.com/samplepagetest/")
    await expect(page).toHaveURL(/globalsqa.com/);
    const tabNameConatact = await page.locator("(//a[contains(text(),'Contact Us')])[1]")
    await tabNameConatact.click()
  await expect(page.locator("h2[class='left_title'] span")).toHaveText("Contact Form");
  await page.close();
   })
