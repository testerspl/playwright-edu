import { type Locator, type Page } from '@playwright/test';
import BasePage from './basePage';

export class LoginPage extends BasePage{
	readonly page: Page;
	readonly emailInput: Locator;
	readonly passInput: Locator;
	readonly loginBtn: Locator;

	constructor(page: Page, url: string) {
		super(url, page)
		this.page = page;
		this.emailInput = page.locator('#email');
		this.passInput = page.locator('#password');
		this.loginBtn = page.locator('#login');
	}

	async login(email: string, pass: string) {
		await this.emailInput.click();
		await this.emailInput.fill(email);
		await this.passInput.click();
		await this.passInput.fill(pass);
		await this.loginBtn.click();
	}
}

export default LoginPage;


// Podstawowe wykorzystanie selektorów
// let obj = {
// 	emailInput: '#email',
// 	passInput: '#password',
// 	loginBtn: '#login'

// }