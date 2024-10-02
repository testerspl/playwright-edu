import test from '@playwright/test';
import TestersPage from '../pages/testerzyplMainPage';


test.only('Check popular training elements', async ({ page }) => {
	await page.goto('https://testerzy.pl/');
	let testerzypage = new TestersPage(page);

    testerzypage.cookieLawAccept()
	await testerzypage.verifyIfTrainingElementsIsVisible();
});
