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
  test('есть оценка, написанная текстом ', () => {
    const obj2 = {
      Anna: 'хорошо',
    };
    const result = 'Оценка может быть только числом';
    expect(sumOfGrades(obj2)).toBe(result);
  });
  test('есть отрицательная оценка ', () => {
    const obj2 = {
      Anna: -5,
    };
    const result = 'Оценка может быть только не отрицательным числом';
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
