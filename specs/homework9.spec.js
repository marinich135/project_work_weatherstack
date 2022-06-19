import api from '../framework/services/index';

describe('Получаем информацию о породах котов', () => {
  test('Получить список пород котов get /breeds 200', async () => {
    const response = await api().Breeds().getAllBreeds();
    expect(response.status)
      .toEqual(200);
  });
  test('Получить описание породы кота по названию породы get /breeds/search 200', async () => {
    const response = await api().Breeds().getOneBreed('sib');
    expect(response.status)
      .toEqual(200);
  });
  test('Получить список всех категорий get /categories 200', async () => {
    const response = await api().Categories().getAllCategories();
    expect(response.status)
      .toEqual(200);

  });

});
