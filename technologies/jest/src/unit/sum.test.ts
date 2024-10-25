import { sumar } from './sum';  // Importás la función desde el archivo

describe("Sumar", () => {
  test('1 + 2 = 3', () => {
    expect(sumar(1, 2)).toBe(3);
  });
});

 /* test('2 + 2 = 4', () => {
    expect(sumar(2, 2)).toBe(4);
  });


}); */