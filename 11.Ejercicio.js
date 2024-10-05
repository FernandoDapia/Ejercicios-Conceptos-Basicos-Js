/** @format */

//*Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

// pista (typeof)

let array = [20, "Gato", 10, "Casa", 120];
function calcularPromedio(array) {
  let total = 0;
  let cantidad = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      total += array[i];
    } else if (typeof array[i] === "string") {
      total += array[i].length;
    }
    cantidad++;
  }
  return total / cantidad;
}

console.log(calcularPromedio(array));
