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

		expect(response.status()).toBe(201); // Oczekiwany status przy zapytaniu POST to 201 (Created)

		const responseBody = await response.json();
		expect(responseBody).toHaveProperty('id'); // API powinno zwrócić nowo utworzone ID
		// console.log(responseBody); // Dla celów debugowania
	});
});

test.describe('API Test with Headers', () => {
	test('GET request with headers', async ({ request }) => {
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
		console.log(responseBody); // Dla celów debugowania
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
