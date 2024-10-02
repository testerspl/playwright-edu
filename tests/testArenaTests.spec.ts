import { expect, test } from '@playwright/test';
import {LoginPage} from '../pages/loginPage'
import {TestBasePage} from '../pages/testBasePage'
import {MainPage} from '../pages/mainPage'
let loginPage: LoginPage
let testBasePage: TestBasePage
let mainPage: MainPage

test.describe('Demo tests for test arena', ()=> {

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page, 'http://demo.testarena.pl/zaloguj')
        testBasePage = new TestBasePage(page, 'http://demo.testarena.pl/zaloguj')
        mainPage = new MainPage(page)
    })

    test('test', async ({ page }) => {
        await page.goto('http://demo.testarena.pl/zaloguj');
    
        await page.locator('#email').click();
        await page.locator('#email').fill('administrator@testarena.pl');
        await page.locator('#password').click();
        await page.locator('#password').fill('sumXQQ72$L');
        await page.locator('#login').click();
    
        expect(
            page.getByRole('heading', { name: 'Moje zadania z przekroczonym' })
        ).toBeVisible();
    
    
        // Błędne działanie - zła praktyka w testach
        // Dodajemy tylko w procesie debugowania
        await page.waitForTimeout(5000)
    });
    
    
    test.only('Add new test to test base', async ({page}) => {

        loginPage.gotoPage()
        loginPage.login('administrator@testarena.pl', 'sumXQQ72$L')
        mainPage.clickTestBaseMenuOption()
        testBasePage.addTest()
        testBasePage.assertElementText('#j_info_box', 'Przypadek testowy został dodany.')
    })
})