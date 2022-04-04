// eslint-disable-next-line import/prefer-default-export
export const sumOfGrades = (scores) => {
  const array = Object.values(scores);
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
};
/* Функция sumOfGrades на вход принимает объект, в котором хранятся оценки за ДЗ нашей группы.
Потом используется Object.values для преобразования объекта в массив, состоящий из значений этого объекта.
С помощью цикла forEach каждый из элементов созданного массива последовательно прибавляется к сумме предыдущих.
Функция на выходе возвращает сумму всех оценок (элементов).
 */
