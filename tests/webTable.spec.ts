
import { test, expect } from '@playwright/test'
test('webTable count testcase :', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const bookTable = page.locator("//table[@name='BookTable']")
    const columns = page.locator("//table[@name='BookTable']//following-sibling::th")
    console.log("number of book table columns=", await columns.count())
    const rows = page.locator("//table[@name='BookTable']/tbody/tr")
    console.log("number of rows in tabel=", await rows.count())
    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(7)
    await page.close()
})

test('webTable Pagination Table checkBox testcase :', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator("//table[@id='ProductTable']/tbody/tr[4]")
    const paginationTable = page.locator("//table[@id='productTable']")
    const columns = paginationTable.locator('thread tr th')
    const rows = paginationTable.locator('tbody tr')
    //filter-will narrow down to the down
    const matchingRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    await matchingRow.locator('input').click()
    await page.pause()
    await page.close()
})


//  test('webTable Pagination2 Table checkBox testcase :',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//    // await page.locator("//table[@id='ProductTable']/tbody/tr[4]")
//     const paginationTable= page.locator("//table[@id='productTable']")
// const columns=paginationTable.locator('thread tr th')
// const rows=paginationTable.locator('tbody tr')
// // const matchingRow=rows.filter({ 
// //     has:page.locator('td'),
// //     hasText:'Product 4'
// // })

// await productSelection(rows,page,'Product 4')
// await productSelection(rows,page,'Product 2')
// await productSelection(rows,page,'Product 3')
// await  matchingRow.locator('input').click()
// await page.pause()
// await page.close() 
// })
//  async function productSelection(rows,page,prdouctName){
//     const matchingRow=rows.filter({ 
//         has:page.locator('td'),
//         hasText:ProductName
//  })
//  await matchingRow.locator('input').click()
// })




test('Print all the table data from page1', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const peginationTable = await page.locator("//table [@id = 'productTable']")

    const tableHeader = peginationTable.locator("thead")

    const tablerow = peginationTable.locator("tbody tr")

    for (let i = 0; i < await tablerow.count(); i++) {

        const row = tablerow.nth(i)
        const rowdata = row.locator('td')  //console.log(rowdata.allTextContents())


        for (let j = 0; j < await rowdata.count(); j++) {

            const celldata = await rowdata.nth(j).textContent()
            console.log(celldata)
        }

    }



})


test.only('print all items from pageall:', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const paginationTable = page.locator("//table[@id='productTable']")
    const columns = paginationTable.locator('thead tr th')
    const rows = paginationTable.locator('tbody tr')
    const pages = page.locator("#pagination li a")
    const totalPage = await pages.count()
    console.log('iam printing total number of table pages :' + totalPage)
    for (let p = 0; p < totalPage; p++) {
        if (p > 0) {
            await pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i)
            const rowData = row.locator('td')
            for (let j = 0; j < await rowData.count(); j++) {
                const cellData = await rowData.nth(j).textContent()
                console.log(cellData);
            }
        }
    }

    await page.close()
})
