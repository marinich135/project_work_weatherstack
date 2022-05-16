import api from '../framework/services';




describe('Отправляем http запросы', () => {
  test('Получить список аэропортов get api/airports 200', async () => {
    const response = await api().Airports().get();
    expect(response.status)
      .toEqual(200);
  });

  test('Получить описание аэропорта по его id get api/airports/:id 200', async () => {
    const response = await api().Airports().getById('KIX');
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
    const response = await api().Tokens().postToken();
    expect(response.status).toEqual(200);
  });

  test('Сохранить любимый аэропорт post  /favorites', async () => {
    const response = await api().Favorites().saveFavorites('HFE');
    expect(response.status).toEqual(201);
  });

  test('Получить любимые аэропорты get  /favorites', async () => {
    const response = await api().Favorites().getFavorites();
    expect(response.status).toEqual(200);
  });
  test('Удалить все любимые аэропорты delete  /favorites/clear_all', async () => {
    const response = await api().Favorites().deleteAllFavorites();
    expect(response.status).toEqual(204);
  });
});
