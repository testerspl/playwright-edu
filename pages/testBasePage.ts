import { type Locator, type Page } from '@playwright/test';
import BasePage from './basePage';

export class TestBasePage extends BasePage{
	readonly page: Page;
	readonly addList: Locator;
	readonly addOptions: Locator;
	readonly testName: Locator;
	readonly testDesc: Locator;
	readonly testResult: Locator;
	readonly testSave: Locator;

	constructor(page: Page, url: string) {
		super(url, page)
		this.page = page;
		this.addList = page.locator('#content > article > nav > ul > div > a');
		this.addOptions = page.locator(
			'#content > article > nav > ul > div > div > ul > li:nth-child(2) > a'
		);
		this.testName = page.locator('#name');
		this.testDesc = page.locator('#description');
		this.testResult = page.locator('#result');
		this.testSave = page.locator('#add');
	}

	async addTest() {
		await this.addList.click();

		await this.addOptions.click();
		await this.testName.fill('Naqwfqwfzwa twqfwqwfestu Krzyśka');
		await this.testDesc.fill('Opis testwqfwqfu Krzyśka');
		await this.testResult.fill('Rezulwqfqftat testu Krzyśka');

		await this.testSave.click();
	}
}

export default TestBasePage;
