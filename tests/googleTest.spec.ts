import {test} from '@playwright/test'

test.describe('smoke suite',()=>{  //to write any testsuite we use describe method, we use the arrow function
    test('google test',async({page})=>{
        //page means a blank page in local browser, this page is an fixture
        await page.goto('https://www.google.com/')
        //await page.goto('https://www.gmail.com/')
    })
    test('gmail test',async({page})=>{
        
        await page.goto('https://www.gmail.com/')
    })
    test('amazon test',async({page})=>{ //java script is a async approach
       
        await page.goto('https://www.amazon.com/')
    
    })
    
})