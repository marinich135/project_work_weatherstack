// eslint-disable-next-line import/prefer-default-export
/* export const sumOfGrades = (scores) => {
  const array = Object.values(scores);
  let sum = 0;
  for (let i = 0; i < Object.keys(scores).length; i++) {
    if (typeof array[i] === 'number' && Number.isInteger(array[i])) {
      sum += array[i];
    } else {
      return 'Оценка может быть только не отрицательным числом';
    }
  }
  return sum;
}; */
// eslint-disable-next-line import/prefer-default-export
/* export const sumOfGrades = (scores) => {
  let sum = 0;
  Object.values(scores).forEach(grade => {
    if (typeof grade != 'number'||  grade < 0){
      throw 'All grades must be number';
    }
    sum += grade;
    return sum;
}; */

// eslint-disable-next-line import/prefer-default-export
export const sumOfGrades = (group) => {
  // eslint-disable-next-line camelcase
  let grade_sum = 0;
  try {
    Object.values(group).forEach((grade) => {
      if (typeof grade !== 'number') {
        // eslint-disable-next-line no-throw-literal
        throw 'Оценка может быть только числом';
      }
      if (grade < 0) {
        // eslint-disable-next-line no-throw-literal
        throw 'Оценка может быть только не отрицательным числом';
      }
      // eslint-disable-next-line camelcase
      grade_sum += grade;
    });
  } catch (err) {
    return err;
  }
  // eslint-disable-next-line camelcase
  return grade_sum;
};
/* Функция sumOfGrades на вход принимает объект, в котором хранятся оценки за ДЗ нашей группы.
Потом используется Object.values для преобразования объекта в массив, состоящий из значений этого объекта.
С помощью цикла forEach каждый из элементов созданного массива последовательно прибавляется к сумме предыдущих.
Кроме случаев,когда оценка меньше нуля или написана слово, в этих случаях появляется предупреждение.
Функция на выходе возвращает сумму всех оценок (элементов).
 */
