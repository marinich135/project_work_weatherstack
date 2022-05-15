import { kolobok, NoviiyGod } from '../src/homework4';



describe('ДЗ 4', () => {
  /**
   * В src/homework4.js напишите функцию "Колобок" и тесты к ней здесь.
   * Функция на вход принимает имя персонажа,
   * например, "дедушка", а в ответ возвращает, текстовую строку.
   * Значение текстовой строки - какой был результат взаимодействия Колобка с данным персонажем.
   * Например, "дедушка" - "Я от дедушки ушел".
   * В функции используйте конструкцию switch - https://learn.javascript.ru/switch
   */
  test('Что произошло после встречи с дедушкой', () => {
    expect(kolobok('Дедушка')).toEqual('Я от дедушки ушёл');
  });
  test.each([
    { a: 'Дедушка', expected: 'Я от дедушки ушёл' },
    { a: 'Бабушка', expected: 'Я от бабушки ушёл' },
    { a: 'Заяц', expected: 'Я от зайца ушёл' },
    { a: 'Волк', expected: 'Я от волка ушёл' },
    { a: 'Медведь', expected: 'Я от медведя ушёл' },
    { a: 'Лиса', expected: 'Лиса его, ам, и съела' },
    { a: 'Чушь', expected: 'Нет таких героев!' },
  ])('$a', ({ a, expected}) => {
    expect(kolobok(a)).toEqual(expected);
  });
  /**
   * В src/homework4.js напишите функцию "Новый год" и тесты к ней здесь.
   * Функция на вход принимает имя персонажа. Дед Мороз или Снегурочка.
   * Возвращает "Снегурочка! Снегурочка! Снегурочка!" или "Дед Мороз! Дед Мороз! Дед Мороз!
   * В функции используйте интерполяцию. https://learn.javascript.ru/es-string
   */

  test('Проверяем реакцию на имя Дед Мороз', () => {
    expect(NoviiyGod('Дед Мороз')).toEqual('Дед Мороз! Дед Мороз! Дед Мороз!');
  });
  test('Проверяем реакцию на имя Снегурочка ', () => {
    expect(NoviiyGod('Снегурочка')).toEqual('Снегурочка! Снегурочка! Снегурочка!');
  });
  test('Проверяем реакцию на неизвестное имя', () => {
    expect(NoviiyGod('Чушь')).toEqual('Нет такого персонажа!');
  });
});
