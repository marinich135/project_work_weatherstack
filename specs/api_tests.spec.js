import api from '../framework/services/index';
import authorization from '../framework/config/accessKey';


describe('Отправляем http запросы', () => {
  test('Получить текущую погоду для какого-то города  get /current 200', async () => {
    const response = await api().Current().getCurrentWeather(authorization.accessKeyAPI, 'Washington');
    expect(response.status)
      .toEqual(200);
  });

  test('Проверить, что текущая погода возвращается для корректного города get /current 200', async () => {
    const response = await api().Current().getCurrentWeather(authorization.accessKeyAPI, 'Washington');
    const json = await response.json();
    expect(json.location.name).toEqual('Washington');
  });

  test('Получить текущую погоду для какого-то города с неверным access_key  get /current 200', async () => {
    const response = await api().Current().getCurrentWeather('Washington');
    const json = await response.json();
    expect(json.error.code).toEqual(101);
    expect(json.error.type).toEqual('invalid_access_key');
  });
  test('Проверяем, что без указания города не возвращается информация о погоде get /current 200', async () => {
    const response = await api().Current().getWeatherWithoutCity(authorization.accessKeyAPI);
    const data1 = await response.json();
    expect(data1.error.code).toEqual(601);
    expect(data1.error.info).toEqual('Please specify a valid location identifier using the query parameter.');
  });
  test('Проверяем, что для бесплатного тарифа не доступна API для автозаполнения get /autocomplete 200', async () => {
    const response = await api().Autocomplete().get(authorization.accessKeyAPI, 'London');
    const data = await response.json();
    expect(data.error.code).toEqual(105);
    expect(data.error.info).toEqual('Access Restricted - Your current Subscription Plan does not support this API Function.');
  });
});
