import { sumOfGrades } from '../src/homework6';

describe('Тестируем sumOfGrades функцию', () => {
  test('import w/o errors', () => {
    expect(sumOfGrades).toBeDefined();
  });

  test('у всех есть оценки', () => {
    const obj1 = {
      Anna: 1,
      Olga: 10,
      Ivan: 9,

    };
    const result = 20;
    expect(sumOfGrades(obj1)).toBe(result);
  });
  test('только одна оценка', () => {
    const obj2 = {
      Anna: 1,
    };
    const result = 1;
    expect(sumOfGrades(obj2)).toBe(result);
  });
  test('нет оценок', () => {
    const obj2 = {
      Anna: 0,
      Olga: 0,
      Ivan: 0,
    };
    const result = 0;
    expect(sumOfGrades(obj2)).toBe(result);
  });
});
