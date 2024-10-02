import { expect, Locator, Page } from '@playwright/test';

export class TesterzyPage {
	readonly page: Page;
	readonly trainingAdd: Locator;
	readonly bookTraining: Locator;
	readonly cookieAccept: Locator

	constructor(page: Page) {
		this.page = page;
		this.trainingAdd = page.getByTestId('training-term-content');
		this.bookTraining = page.getByRole('button', { name: 'Rezerwuj' });
        this.cookieAccept = page.locator('#cookieLawModal-accept')
	}
    
	async cookieLawAccept() {
        await this.cookieAccept.click()
    }

	public async verifyIfTrainingElementsIsVisible() {
		await expect(this.bookTraining).toBeVisible();
		await expect(this.trainingAdd).toBeVisible();
	}
}
export default TesterzyPage;
