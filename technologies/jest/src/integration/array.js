//function filtrarPositivos(arr: []) {
   // return arr.filter((n) => n >= 0)
//}

//module.exports = filtrarPositivos;

function filtrarPositivos(numeros) {
    return numeros.filter(num => num > 0);
  }
  
  module.exports = filtrarPositivos;  // Exportar la función para que pueda ser utilizada en el test