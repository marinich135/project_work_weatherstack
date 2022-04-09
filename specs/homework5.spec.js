import fetch from 'node-fetch';

const URL = 'https://airportgap.dev-tester.com/';
describe('Отправляем http запросы', () => {
  test('Получить список аэропортов get api/airports 200', async () => {
    const path = 'api/airports';
    const response = await fetch(URL + path, { method: 'GET' });
    expect(response.status)
      .toEqual(200);
  });

  test('Получить описание аэропорта по его id get api/airports/:id 200', async () => {
    const path = 'api/airports/KIX';
    const response = await fetch(URL + path, { method: 'GET' });
    const info = await response.json();
    console.log(info);
    expect(info.data.attributes.city).toEqual('Osaka');
  });

  test('Получить расстояние между двумя заданными аэропортами post  /airports/distance 200', async () => {
    const path = 'api/airports/distance';
    const iatacode = {
      from: 'NRT',
      to: 'KIX',
    };
    const response = await fetch(URL + path, { method: 'POST', body: JSON.stringify(iatacode) });
    expect(response.status)
      .toEqual(200);
  });

  test('Получить токен для аккаунта post  /tokens 200', async () => {
    const path = 'api/tokens';
    const credentials = {
      email: 'test@airportgap.com',
      password: 'airportgappassword',
    };
    const response = await fetch(URL + path, { method: 'POST', body: JSON.stringify(credentials) });
    expect(response.status).toEqual(200);
  });

  const BearerToken = '9WHkBEdbYYYzDSoMkV9UjZjh';
  test('Сохранить любимый аэропорт post /favorites', async () => {
    const path = 'api/favorites?';
    const params = new URLSearchParams(
      {
        airport_id: 'JFK',
      },
    );
    const response = await fetch(URL + path + params, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer token=${BearerToken}`,
      },
    });
    expect(response.status).toEqual(201);
  });

  test('Получить любимые аэропорты get  /favorites', async () => {
    const path = 'api/favorites';

    const response = await fetch(URL + path, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer token=${BearerToken}`,
      },
    });
    expect(response.status).toEqual(200);
  });
});
