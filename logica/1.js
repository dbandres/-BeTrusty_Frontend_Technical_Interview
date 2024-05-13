// Debes escribir un programa que encuentre la frecuencia con que aparecen los distintos caracteres (letras y números) dentro de una cadena de texto. El resultado se devuelve una matriz de objetos. Cada uno de estos objetos tiene 2 campos: carácter (caracter) y número de veces que aparece (veces). La matriz estará ordenada por el campo carácter. No se diferencia entre mayúsculas y minúsculas ni entre vocales acentuadas.

// Ejemplo:

// contarCar("Hoy ya es día 10")

// deberá devolver:

// {car: '0', veces: 1}
// {car: '1', veces: 1}
// {car: 'a', veces: 2}
// {car: 'd', veces: 1}
// {car: 'e', veces: 1}
// {car: 'h', veces: 1}
// {car: 'i', veces: 1}
// {car: 'o', veces: 1}
// {car: 's', veces: 1}
// {car: 'y', veces: 2}

const contarCar = value => {
  let recuento = {};

  for (let i = 0; i < value.length; i++) {
    let caracter = value[i];
    recuento[caracter] = (recuento.hasOwnProperty(caracter)) ? recuento[caracter] + 1 : 1;
  }

  let resultado = [];
  for (let key in recuento) {
    resultado.push({ car: key, veces: recuento[key] });
  }

  let arrayFiltrado = resultado.filter(objeto => {
    for (let key in objeto) {
      if (objeto.hasOwnProperty(key) && (objeto[key] === ' ')) {
        return false;
      }
    }
    return true;
  });
  arrayFiltrado.sort((a, b) => a.car.localeCompare(b.car, undefined, { sensitivity: 'base', ignorePunctuation: true }));

  return arrayFiltrado
}
let cadena = "Hoy ya es día 10";
let resultado = contarCar(cadena);
console.log(resultado);
