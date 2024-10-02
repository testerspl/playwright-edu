import { expect, test } from '@playwright/test';

test.describe('API Test', () => {
	test('GET request example', async ({ request }) => {
		// Wysyłanie zapytania GET do API
		const response = await request.get(
			'https://jsonplaceholder.typicode.com/posts/1'
		);

		// Sprawdzanie, czy odpowiedź zwróciła status 200
		expect(response.status()).toBe(200);

		// Pobranie odpowiedzi w formacie JSON
		const responseBody = await response.json();
		expect(responseBody.id).toEqual(1);
		// Sprawdzenie, czy odpowiedź zawiera oczekiwane dane
		expect(responseBody).toHaveProperty('id', 1);
		expect(responseBody).toHaveProperty('title');
		//console.log(responseBody); // Dla celów debugowania
	});

	test('POST request example', async ({ request }) => {
		const response = await request.post(
			'https://jsonplaceholder.typicode.com/posts',
			{
				data: {
					title: 'foo',
					body: 'bar',
					userId: 1,
				},
			}
		);

		expect(response.status()).toBe(201); // Oczekiwany status przy zapytaniu POST to 200 (Created)

		const responseBody = await response.json();
		expect(responseBody).toHaveProperty('id'); // API powinno zwrócić nowo utworzone ID
		// console.log(responseBody); // Dla celów debugowania
	});
});

test.describe('API Test with Headers', () => {
	test.only('GET request with headers', async ({ request }) => {
		// Ustawienie nagłówków
		const headers = {
			Authorization: 'Bearer your_token_here', // Token autoryzacji
			'Content-Type': 'application/json', // Typ zawartości
			'Custom-Header': 'CustomValue', // Przykładowy nagłówek niestandardowy
		};

		// Wysyłanie zapytania GET z nagłówkami
		const response = await request.get(
			'https://jsonplaceholder.typicode.com/posts/1',
			{
				headers: headers,
			}
		);

		// Sprawdzanie statusu odpowiedzi
		expect(response.status()).toBe(200);

		// Pobranie odpowiedzi w formacie JSON
		const responseBody = await response.json();

		// Sprawdzanie danych w odpowiedzi
		expect(responseBody).toHaveProperty('id', 1);
		expect(responseBody).toHaveProperty('title');
	});

	test('POST request with headers', async ({ request }) => {
		const headers = {
			Authorization: 'Bearer your_token_here', // Token autoryzacji
			'Content-Type': 'application/json', // Typ zawartości
			Accept: 'application/json', // Nagłówek Accept
		};

		const data = {
			title: 'foo',
			body: 'bar',
			userId: 1,
		};

		const response = await request.post(
			'https://jsonplaceholder.typicode.com/posts',
			{
				headers: headers,
				data: data,
			}
		);

		expect(response.status()).toBe(201); // Oczekiwany status odpowiedzi to 201 (Created)

		const responseBody = await response.json();
		expect(responseBody).toHaveProperty('id');
		console.log(responseBody); // Dla celów debugowania
	});
});

test.describe('API MOCK Test', () => {
	test('GET request example', async ({ page }) => {
		// Mock the api call before navigating
		await page.route('*/**/api/v1/fruits', async (route) => {
			const json = [{ name: 'Strawberry', id: 21 }];
			await route.fulfill({ json });
		});
		// Go to the page
		await page.goto('https://demo.playwright.dev/api-mocking');

		// Assert that the Strawberry fruit is visible
		await expect(page.getByText('Strawberry')).toBeVisible();
	});

	test('gets the json from api and adds a new fruit', async ({ page }) => {
		// Get the response and add to it
		await page.route('*/**/api/v1/fruits', async (route) => {
			const response = await route.fetch();
			const json = await response.json();
			json.push({ name: 'Loquat', id: 100 });
			// Fulfill using the original response, while patching the response body
			// with the given JSON object.
			await route.fulfill({ response, json });
		});

		// Go to the page
		await page.goto('https://demo.playwright.dev/api-mocking');

		// Assert that the new fruit is visible
		await expect(page.getByText('Loquat', { exact: true })).toBeVisible();
	});
});
