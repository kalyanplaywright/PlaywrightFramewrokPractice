import{test,expect} from '@playwright/test'
//import{DateTime} from 'luxon'

test('Calender',async({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    await page.locator('#birthday').fill('2023-04-03')
    await page.waitForTimeout(3000)
})

test.only('date range - Calender',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')    
const startDate =  page.locator("[placeholder='Start date']")
await startDate.click() 
dateSelection(23,"August 2025",page)
    await page.waitForTimeout(5000)
    await page.reload()
    await startDate.click() 
    dateSelection(16,"July 2024",page)
    await page.waitForTimeout(5000)
    await page.reload()
    await startDate.click() 
    dateSelection(26,"May 2023",page)
    await page.waitForTimeout(5000)       
})
async function dateSelection(date:number,dateToSelect:String,page) {
const monthYear= page.locator("div[class='datepicker-days'] th[class='datepicker-switch']")
const next = page.locator("div[class='datepicker-days'] th[class='next']")
const prev= page.locator("div[class='datepicker-days'] th[class='prev']")
const formattedMonth=DateTime.fromFormat(dateToSelect,"MMMM yyyy")
while(await monthYear.textContent() !=dateToSelect)    {
        if(formattedMonth<DateTime.fromJSDate(new Date())){
            await prev.click()            
        }
        else{
            await next.click()        }
    }
    await page.locator(`//td[@class="day"] [text()="${date}"]`).click()
}