/** @format */

//* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
//* cuando el resto del numero dividido entre 2 sea 0.

const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

//* 1.3 Crea un bucle para conseguir dormir contando ovejas.
//* Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
//* Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
//* y cambia el mensaje en la décima vuelta a 'Dormido!'.

const sleep = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  console.log("Intentnando dormir");
  if (i === 9) console.log("Dormido ");
}
