import { type Locator, type Page } from '@playwright/test';

export class MainPage {
	readonly page: Page;
	readonly menuTestBase: Locator;

	constructor(page: Page) {
		this.page = page;
		this.menuTestBase = page.locator('#wrapper > ul > li.item5 > a');
	}

	async clickTestBaseMenuOption() {
		await this.menuTestBase.click();
	}
}

export default MainPage;
