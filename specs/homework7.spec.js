import api from '../framework/services/index';
import api1 from '../framework/services/index.tok';
import api2 from '../framework/services/index.favorites';

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
    const response = await api().Airports().postDistanceBetweenAirports('KIX', 'NRT');
    expect(response.status)
      .toEqual(200);
  });
  test('Получить расстояние между двумя заданными аэропортами  в километрах, сравнить с ожидаемым рез-ом post  /airports/distance 200', async () => {
    const response = await api().Airports().postDistanceBetweenAirports('KIX', 'NRT');
    const dataObj = await response.json();
    expect(response.status)
      .toEqual(200);
    expect(Math.round(dataObj.data.attributes.kilometers)).toEqual(491);
  });

  test('Получить токен для аккаунта post  /tokens 200', async () => {
    /* const credentials = {
      email: 'test@airportgap.com',
      password: 'airportgappassword',
    }; */
    const response = await api1().Tokens().postToken();
    expect(response.status).toEqual(200);
  });

  test('Сохранить любимый аэропорт post  /favorites', async () => {
    const response = await api2().Favorites().saveFavorites('HFE');
    expect(response.status).toEqual(201);
  });

  test('Получить любимые аэропорты get  /favorites', async () => {
    const response = await api2().Favorites().getFavorites();
    expect(response.status).toEqual(200);
  });
  test('Удалить все любимые аэропорты delete  /favorites/clear_all', async () => {
    const response = await api2().Favorites().deleteAllFavorites();
    expect(response.status).toEqual(204);
  });
});
