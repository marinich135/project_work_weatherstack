import api from '../framework/services';

const BearerToken = '9WHkBEdbYYYzDSoMkV9UjZjh';
const Auth = 'cRV7dGJDuG39opTe3MUBdien';

describe('Отправляем http запросы', () => {
  test('Получить список аэропортов get api/airports 200', async () => {
    const response = await api().Airports().get();
    expect(response.status)
      .toEqual(200);
  });

  test('Получить описание аэропорта по его id get api/airports/:id 200', async () => {
    const response = await api().Airports().getById();
    const info = await response.json();
    expect(info.data.attributes.city).toEqual('Osaka');
  });

  test('Получить расстояние между двумя заданными аэропортами post  /airports/distance 200', async () => {
    const response = await api().Airports().postDistanceBetweenAirports(Auth, 'KIX', 'NRT');
    expect(response.status)
      .toEqual(200);
  });
  test('Получить расстояние между двумя заданными аэропортами  в километрах, сравнить с ожидаемым рез-ом post  /airports/distance 200', async () => {
    const response = await api().Airports().postDistanceBetweenAirports(Auth, 'KIX', 'NRT');
    const dataObj = await response.json();
    expect(response.status)
      .toEqual(200);
    expect(Math.round(dataObj.data.attributes.kilometers)).toEqual(491);
  });

  test('Получить токен для аккаунта post  /tokens 200', async () => {
    const credentials = {
      email: 'test@airportgap.com',
      password: 'airportgappassword',
    };
    const response = await api().Airports().postToken(credentials);
    expect(response.status).toEqual(200);
  });

  test('Сохранить любимый аэропорт post  /favorites', async () => {
    const response = await api().Airports().saveFavorites(BearerToken, 'HFE');
    expect(response.status).toEqual(201);
  });

  test('Получить любимые аэропорты get  /favorites', async () => {
    const response = await api().Airports().getFavorites(BearerToken);
    expect(response.status).toEqual(200);
  });
  test('Удалить все любимые аэропорты delete  /favorites/clear_all', async () => {
    const response = await api().Airports().deleteAllFavorites(BearerToken);
    expect(response.status).toEqual(204);
  });
});
