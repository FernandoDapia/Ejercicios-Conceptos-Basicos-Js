/** @format */

//*Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function pefindLongestWord(param) {
  let longestWord = param[0];

  for (let i = 1; i < param.length; i++) {
    const element = param[i];
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }
  return longestWord;
}

console.log(findLongestWord(avengers));

const palabraLarga = ["America", "India", "Nueva Zelanda"];

console.log(findLongestWord(palabraLarga));
