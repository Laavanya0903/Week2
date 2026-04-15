import {test, chromium, firefox} from "@playwright/test"
test.only('edge and firefox', async({})=>
{
    const edge =await chromium.launch({channel:'msedge', headless: false})
    const page1=await edge.newPage()
    await page1.goto("https://www.redbus.in")
    console.log(await page1.title())
    console.log(page1.url())
    

    const ff=await firefox.launch({channel:'firefox', headless: false})
    const page2=await ff.newPage()
    await page2.goto("https://www.flipkart.com")
    console.log(await page2.title())
    console.log(page2.url())
}
)