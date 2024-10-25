
const sumar = require('./sum');  // Importás la función desde el archivo

test('1 + 2 = 3', () => {
  expect(sumar(1, 2)).toBe(3);
});
