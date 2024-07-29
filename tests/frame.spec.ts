import { test, expect } from '@playwright/test';
test('Handling frame1 test case', async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    //await page.locator("input[name='mytext1']").fill('nameframe1')
    const allFrames = page.frames()
    const countOfFrame = allFrames.length
    console.log('get all the frames:'+countOfFrame)
    const frameOne = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})

await frameOne?.locator("input[name='mytext1']").fill('nameframe1')
await page.waitForTimeout(3000)
await page.close()

})

test('frame locator :',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    //await page.locator("input[name='mytext1']").fill('nameframe1')
    const allFrames=page.frames()
    const countOfFrames=allFrames.length
    console.log('get all frames:'+countOfFrames);
    const frame1=page.frameLocator("frame[src='frame_1.html']")
    await frame1?.locator("input[name='mytext1']").fill('nameframe1')
    await page.waitForTimeout(3000)
    await page.close()
    })


    test.only('checkbox selection in the frame  :',async({page})=>{
        await page.goto('https://ui.vision/demo/webtest/frames/')
        const frameThree = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'})
        const childFrame =frameThree?.childFrames()
        console.log('print the childDFrames:'+childFrame?.length)
       // await childFrame[0].locator('//*[@id="i8"]/div[3]/div').check({force:true})
        await childFrame[0].locator('//*[@id="i19"]/div[3]').check({force:true})
        await page.waitForTimeout(5000)
    await page.close()

    })
