export const kolobok = (a) => {
  switch (a) {
    case 'Дедушка':
      return 'Я от дедушки ушёл';
    case 'Бабушка':
      return 'Я от бабушки ушёл';
    case 'Заяц':
      return 'Я от зайца ушёл';
    case 'Волк':
      return 'Я от волка ушёл';
    case 'Медведь':
      return 'Я от медведя ушёл';
    case 'Лиса':
      return 'Лиса его, ам, и съела';
    default:
      return 'Нет таких героев';
  }
};
export const NoviiyGod = (name) => {
  if (name === 'Дед Мороз' || name === 'Снегурочка') {
    return `${name}! ${name}! ${name}!`;
  } else {
    return 'Нет такого персонажа!';
  }
};

