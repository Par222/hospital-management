var {By, Builder, until, Java} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing')

const email = 'paras1001@gmail.com';
const password = '1234567';
const name = 'paras'

suite(function(env){
    describe("Login and visit", function () {
        let driver;

        beforeEach(async function () {
            driver = await new Builder().forBrowser('chrome').build();
            driver.manage().window().maximize();
        });

        it('Login and visit profile page check user\'s name', async function (){
            await driver.get('http://localhost:3000/login');
            driver.manage().window().maximize();
            await driver.wait(until.elementLocated(By.id('sign in'))).click();
            await driver.findElement(By.id('email')).sendKeys(email)
            await driver.findElement(By.id('password')).sendKeys(password)
            await driver.findElement(By.id('sign-in button')).click();
            let profilePage = await driver.wait(until.elementLocated(By.linkText('Profile')))
            await profilePage.click();
            const profileNameDiv = await driver.wait(until.elementLocated(By.id('name')))
            const profileName = await profileNameDiv.getText()
            // setTimeout(async () => {await driver.quit() }, 1000)
        });

        it('Login and show doctor details', async function (){
            setTimeout(async () => {
                await driver.get('http://localhost:3000/login');
                driver.manage().window().maximize();
                await driver.wait(until.elementLocated(By.id('sign in'))).click();
                await driver.findElement(By.id('email')).sendKeys(email)
                await driver.findElement(By.id('password')).sendKeys(password)
                await driver.findElement(By.id('sign-in button')).click();
                let facilityPage = await driver.wait(until.elementLocated(By.id('fac')))
                await facilityPage.click();
                let doctorPage = await driver.wait(until.elementLocated(By.linkText('Doctors')))
                await doctorPage.click();
                setTimeout(async () => {
                    let doctor = await driver.wait(until.elementLocated(By.id('doc')))
                    await doctor.click();
                    let doctorName = await driver.wait(until.elementLocated(By.id('docname')))
                    let doc = await doctorName.getText()
                }, 2000)
                setTimeout(async () => {await driver.quit() }, 4000)
            }, 2000)
        });
    })
})
