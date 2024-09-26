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
