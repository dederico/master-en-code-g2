// Crea una función que ordene de forma descendente  un arreglo de números
// Ej.Entrada-- > [9, 3, 1, 6, 5, 88, -1, 2, 7]
// Salida →[88, 9, 7, 6, 5, 3, 1, -1]
ordenar = () => {
  for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
    console.log(numeros[index + 1]);
    if (numeros[index] >= numeros[index + 1]) {
      console.log("Es mayor");
    } else {
      console.log("No es mayor");
    }
  }
};
numeros = [9, 3, 1, 6, 5, 88, -1, 2, 7];
ordenar(numeros);
