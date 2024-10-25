
const filtrarPositivos = require('./array');  // Importamos la función desde el archivo array.js

test('filtra solo números positivos de un array', () => {
  const numeros = [-3, -2, -1, 0, 1, 2, 3];  // Datos de prueba
  const resultadoEsperado = [1, 2, 3, 5];  // Resultado esperado
  
  // Hacemos la comparación con Jest
  expect(filtrarPositivos(numeros)).toEqual(resultadoEsperado);
});