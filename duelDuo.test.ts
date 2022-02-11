
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking on draw button displays choices', async () => {
    const draw = await driver.findElement(By.id('draw'));
    
    await driver.sleep(1500);

    await draw.click();
    
    await driver.sleep(1500);

    const choices =  await driver.findElement(By.id('choices'));
    const displays = await choices.isDisplayed()

    expect(displays).toBe(true)

})

test('clicking Add to Duo button displays div with id = "player-duo"', async () => {
    const addToDuo = await driver.findElement(By.xpath("//div[@class ='bot-btn']"));

    await driver.sleep(1500);

    await addToDuo.click();
    
    await driver.sleep(1500);

    const duoHeader =  await driver.findElement(By.id('your-duo-header'));
    const displays = await duoHeader.isDisplayed()

    expect(displays).toBe(true)

})