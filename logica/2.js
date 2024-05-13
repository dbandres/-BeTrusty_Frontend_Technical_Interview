/*
  Los primeros dispositivos móviles tenían un teclado llamado T9
  con el que se podía escribir texto utilizando únicamente su
  teclado numérico (del 0 al 9).

  Crea una función que transforme las pulsaciones del T9 a su representación con letras.
    - Debes buscar cuál era su correspondencia original
    - Cada bloque de pulsaciones va separado por un guión.
    - Si un bloque tiene más de un número, debe ser siempre el mismo.
    - Ejemplo:
      Entrada: 6-666-88-777-33-3-33-888
      Salida: MOUREDEV
 */

const teclado = [
  {
    '1': ' '
  },
  {
    '2': ['a', 'b', 'c']
  },
  {
    '3': ['d', 'e', 'f']
  },
  {
    '4': ['g', 'h', 'i']
  },
  {
    '5': ['j', 'k', 'l']
  },
  {
    '6': ['m', 'n', 'o']
  },
  {
    '7': ['p', 'q', 'r', 's']
  },
  {
    '8': ['t', 'u', 'v']
  },
  {
    '9': ['w', 'x', 'y', 'z']
  },
  {
    '0': ' '
  }
]

function validarBloquesIguales(bloques) {
  for (let i = 0; i < bloques.length; i++) {
    let bloque = bloques[i];
    let primerCaracter = bloque[0];
    if (!bloque.split("").every(caracter => caracter === primerCaracter)) {
      return false;
    }
  }
  return true;
}

function bloquesEnTeclado(bloque) {
  let caracteres = [];
  //Debes buscar cuál era su correspondencia original
  bloque.forEach(bloque => {
    for (let i = 0; i < teclado.length; i++) {
      if (teclado[i].hasOwnProperty(bloque[0])) {
        let index = bloque.length-1
        caracteres = caracteres.concat(teclado[i][bloque[0]][index])
      }
    }
  });
  return caracteres
}



const t9Keyboard = value => {

  let bloques = value.split('-')

  //- Si un bloque tiene más de un número, debe ser siempre el mismo.
  if (validarBloquesIguales(bloques)) {
    const result = bloquesEnTeclado(bloques).join('')
    return result
  } else {
    return "Los bloques no tienen el mismo caracter."
  }

}

let cadena = "6-666-88-777-33-3-33-888";
let cadena2 = '44-666-555-2-0-6-88-66-3-666'
let resultado = t9Keyboard(cadena);
console.log(resultado);
